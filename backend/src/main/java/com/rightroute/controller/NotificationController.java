package com.rightroute.controller;

import com.rightroute.model.Subscription;
import com.rightroute.repository.SubscriptionRepository;
import com.rightroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/notifications")
@CrossOrigin(origins = "*")
public class NotificationController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    // ── SUBSCRIBE ──────────────────────────────────────────────────────────────
    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, Object> payload) {
        String email = (String) payload.get("email");
        String schemeName = payload.get("schemeName") != null
                ? payload.get("schemeName").toString()
                : "Government Scheme";
        Long schemeId = payload.get("schemeId") != null
                ? Long.parseLong(payload.get("schemeId").toString())
                : 0L;

        if (email == null || email.isBlank())
            return ResponseEntity.badRequest().body(Map.of("error", "Email is required"));

        // Check duplicate
        Optional<Subscription> existing = subscriptionRepository.findByEmailAndSchemeId(email, schemeId);
        if (existing.isPresent()) {
            return ResponseEntity.ok(Map.of(
                "success", true,
                "alreadySubscribed", true,
                "message", "Already subscribed to \"" + schemeName + "\""
            ));
        }

        // Save to DB
        Subscription sub = new Subscription();
        sub.setEmail(email);
        sub.setSchemeId(schemeId);
        sub.setSchemeName(schemeName);
        subscriptionRepository.save(sub);

        System.out.println("✓ Subscription saved. Total count: " + subscriptionRepository.countAllSubscriptions());

        // Send email
        try {
            emailService.sendSubscriptionEmail(email, schemeName);
            System.out.println("✓ Email sent to: " + email);
        } catch (Exception e) {
            System.err.println("✗ Email failed but subscription saved: " + e.getMessage());
        }

        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Subscribed! Confirmation email sent to " + email
        ));
    }

    // ── COUNT — used by admin stats bar ───────────────────────────────────────
    @GetMapping("/count")
    public ResponseEntity<?> getCount() {
        long count = subscriptionRepository.countAllSubscriptions();
        System.out.println("Subscription count requested: " + count);
        return ResponseEntity.ok(Map.of("count", count));
    }

    // ── GET ALL — used by admin subscriptions tab ─────────────────────────────
    @GetMapping("/all")
    public ResponseEntity<List<Subscription>> getAll() {
        List<Subscription> all = subscriptionRepository.findAll();
        System.out.println("All subscriptions fetched: " + all.size());
        return ResponseEntity.ok(all);
    }
}