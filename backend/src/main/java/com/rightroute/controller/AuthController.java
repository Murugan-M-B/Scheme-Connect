package com.rightroute.controller;

import com.rightroute.model.User;
import com.rightroute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    // ── LOGIN ──────────────────────────────────────────────────────────────────
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");

        if (username == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Username and password are required"));
        }

        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty() || !userOpt.get().getPassword().equals(password)) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid username or password"));
        }

        User user = userOpt.get();
        if (!user.isActive()) {
            return ResponseEntity.status(403).body(Map.of("error", "Account is disabled. Contact admin."));
        }

        return ResponseEntity.ok(Map.of(
            "id", user.getId(),
            "username", user.getUsername(),
            "name", user.getName(),
            "email", user.getEmail(),
            "role", user.getRole()
        ));
    }

    // ── REGISTER ───────────────────────────────────────────────────────────────
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");
        String name     = payload.get("name");
        String email    = payload.get("email");

        // Validation
        if (username == null || username.isBlank())
            return ResponseEntity.badRequest().body(Map.of("error", "Username is required"));
        if (password == null || password.length() < 6)
            return ResponseEntity.badRequest().body(Map.of("error", "Password must be at least 6 characters"));
        if (name == null || name.isBlank())
            return ResponseEntity.badRequest().body(Map.of("error", "Full name is required"));
        if (email == null || !email.contains("@"))
            return ResponseEntity.badRequest().body(Map.of("error", "Valid email is required"));

        if (userRepository.existsByUsername(username))
            return ResponseEntity.badRequest().body(Map.of("error", "Username already taken"));
        if (userRepository.existsByEmail(email))
            return ResponseEntity.badRequest().body(Map.of("error", "Email already registered"));

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setName(name);
        user.setEmail(email);
        user.setRole("USER");
        user.setActive(true);

        userRepository.save(user);

        return ResponseEntity.ok(Map.of(
            "success", true,
            "message", "Account created successfully! You can now login."
        ));
    }
}