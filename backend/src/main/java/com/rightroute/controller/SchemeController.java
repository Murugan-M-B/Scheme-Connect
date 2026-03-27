package com.rightroute.controller;

import com.rightroute.model.Scheme;
import com.rightroute.model.EligibilityResult;
import com.rightroute.dto.UserDataDTO;
import com.rightroute.service.SchemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

@RestController
@RequestMapping("/api/v1/schemes")
@CrossOrigin(origins = "*")
public class SchemeController {

    @Autowired
    private SchemeService schemeService;

    // ── GET ALL ────────────────────────────────────────────────────────────────
    @GetMapping
    public ResponseEntity<List<Scheme>> getAllSchemes() {
        return ResponseEntity.ok(schemeService.getAllActiveSchemes());
    }

    // ── GET BY ID ──────────────────────────────────────────────────────────────
    @GetMapping("/{id}")
    public ResponseEntity<?> getSchemeById(@PathVariable("id") Long id) {
        Scheme s = schemeService.getSchemeById(id);
        if (s == null) return ResponseEntity.notFound().build();

        Map<String, Object> resp = new HashMap<>();
        resp.put("id", s.getId());
        resp.put("title", s.getTitle());
        resp.put("description", s.getDescription());
        resp.put("department", s.getDepartment());
        resp.put("category", s.getCategory());
        resp.put("deadline", s.getDeadline() != null ? s.getDeadline().toString() : null);
        resp.put("active", s.isActive());
        resp.put("officialUrl", s.getOfficialUrl() != null ? s.getOfficialUrl() : "https://www.tn.gov.in/");

        // Benefits — split comma string into list
        List<String> benefits = new ArrayList<>();
        if (s.getBenefits() != null && !s.getBenefits().isBlank()) {
            benefits = Arrays.asList(s.getBenefits().split(",\\s*"));
        }
        resp.put("benefits", benefits);

        // Documents
        resp.put("documents", s.getRequiredDocuments() != null ? s.getRequiredDocuments() : new ArrayList<>());

        // Eligibility rules
        Map<String, Object> rules = new HashMap<>();
        if (s.getEligibilityRule() != null) {
            if (s.getEligibilityRule().getMinAge() > 0)
                rules.put("minAge", s.getEligibilityRule().getMinAge());
            if (s.getEligibilityRule().getMaxAge() > 0)
                rules.put("maxAge", s.getEligibilityRule().getMaxAge());
            if (s.getEligibilityRule().getMaxIncome() > 0)
                rules.put("maxIncome", s.getEligibilityRule().getMaxIncome());
            if (s.getEligibilityRule().getGender() != null)
                rules.put("gender", s.getEligibilityRule().getGender());
            if (s.getEligibilityRule().getCategory() != null)
                rules.put("category", s.getEligibilityRule().getCategory());
        }
        resp.put("eligibilityRules", rules);

        return ResponseEntity.ok(resp);
    }

    // ── CREATE (Admin) ─────────────────────────────────────────────────────────
    @PostMapping
    public ResponseEntity<?> createScheme(@RequestBody Map<String, Object> payload) {
        try {
            Scheme scheme = new Scheme();
            scheme.setTitle(String.valueOf(payload.getOrDefault("title", "")));
            scheme.setDescription(String.valueOf(payload.getOrDefault("description", "")));
            scheme.setDepartment(String.valueOf(payload.getOrDefault("department", "")));
            scheme.setCategory(String.valueOf(payload.getOrDefault("category", "")));
            scheme.setOfficialUrl(String.valueOf(payload.getOrDefault("officialUrl", "")));
            scheme.setActive(true);

            Object benefitsObj = payload.get("benefits");
            if (benefitsObj instanceof List<?>) {
                List<String> benefitList = new ArrayList<>();
                for (Object item : (List<?>) benefitsObj) {
                    benefitList.add(String.valueOf(item));
                }
                scheme.setBenefits(String.join(", ", benefitList));
            } else if (benefitsObj != null) {
                scheme.setBenefits(benefitsObj.toString());
            }

            Scheme saved = schemeService.createScheme(scheme);
            return ResponseEntity.ok(Map.of(
                "success", true,
                "id", saved.getId() != null ? saved.getId() : 0L,
                "title", saved.getTitle() != null ? saved.getTitle() : ""
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Error creating scheme"));
        }
    }

    // ── UPDATE (Admin) ─────────────────────────────────────────────────────────
    @PutMapping("/{id}")
    public ResponseEntity<?> updateScheme(@PathVariable("id") Long id, @RequestBody Map<String, Object> payload) {
        try {
            Scheme scheme = new Scheme();
            if (payload.get("title") != null) scheme.setTitle(payload.get("title").toString());
            if (payload.get("description") != null) scheme.setDescription(payload.get("description").toString());
            if (payload.get("department") != null) scheme.setDepartment(payload.get("department").toString());
            if (payload.get("category") != null) scheme.setCategory(payload.get("category").toString());
            if (payload.get("officialUrl") != null) scheme.setOfficialUrl(payload.get("officialUrl").toString());

            Object benefitsObj = payload.get("benefits");
            if (benefitsObj instanceof List<?>) {
                List<String> benefitList = new ArrayList<>();
                for (Object item : (List<?>) benefitsObj) {
                    benefitList.add(String.valueOf(item));
                }
                scheme.setBenefits(String.join(", ", benefitList));
            } else if (benefitsObj != null) {
                scheme.setBenefits(benefitsObj.toString());
            }

            Scheme updated = schemeService.updateScheme(id, scheme);
            if (updated == null) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(Map.of(
                "success", true,
                "id", updated.getId() != null ? updated.getId() : 0L,
                "title", updated.getTitle() != null ? updated.getTitle() : ""
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Error updating scheme"));
        }
    }

    // ── DELETE (Admin) ─────────────────────────────────────────────────────────
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteScheme(@PathVariable("id") Long id) {
        boolean deleted = schemeService.deleteScheme(id);
        if (!deleted) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(Map.of("success", true, "message", "Scheme deleted successfully"));
    }

    // ── CHECK ELIGIBILITY ──────────────────────────────────────────────────────
    @PostMapping("/check-eligibility/{schemeId}")
    public ResponseEntity<?> checkEligibility(
            @PathVariable("schemeId") Long schemeId,
            @RequestBody Map<String, Object> payload) {

        UserDataDTO userData = new UserDataDTO();
        try {
            if (payload.get("age") != null)
                userData.setAge(((Number) payload.get("age")).intValue());
            if (payload.get("income") != null)
                userData.setIncome(((Number) payload.get("income")).doubleValue());
            if (payload.get("gender") != null)
                userData.setGender(payload.get("gender").toString());
            if (payload.get("category") != null) {
                String cat = payload.get("category").toString();
                userData.setCategory(cat.isEmpty() ? null : cat);
            }
        } catch (Exception ex) {
            // ignore parsing errors
        }

        EligibilityResult res = schemeService.checkEligibility(schemeId, userData);
        Scheme scheme = schemeService.getSchemeById(schemeId);

        String officialUrl = (scheme != null && scheme.getOfficialUrl() != null)
                ? scheme.getOfficialUrl() : "https://www.tn.gov.in/";
        String schemeName = scheme != null && scheme.getTitle() != null ? scheme.getTitle() : "";

        Map<String, Object> resp = new HashMap<>();
        resp.put("schemeId", schemeId);
        resp.put("schemeName", schemeName);
        resp.put("officialUrl", officialUrl);
        resp.put("status", res.isEligible() ? "ELIGIBLE" : "NOT_ELIGIBLE");
        resp.put("eligible", res.isEligible());
        resp.put("message", res.getMessage());
        resp.put("reason", res.isEligible() ? "" : res.getMessage());
        resp.put("reasons", res.isEligible() ? new ArrayList<>() : List.of(res.getMessage()));

        return ResponseEntity.ok(resp);
    }
}