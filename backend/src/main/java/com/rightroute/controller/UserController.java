package com.rightroute.controller;

import com.rightroute.model.User;
import com.rightroute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // ── GET ALL USERS ──────────────────────────────────────────────────────────
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // ── TOGGLE ACTIVE/DISABLE USER ─────────────────────────────────────────────
    @PutMapping("/{id}/toggle")
    public ResponseEntity<?> toggleUser(@PathVariable("id") Long id) {
        if (id == null) return ResponseEntity.badRequest().body(Map.of("error", "Invalid ID"));

        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isEmpty()) return ResponseEntity.notFound().build();

        User user = userOpt.get();
        if (user.getRole().equals("ADMIN"))
            return ResponseEntity.badRequest().body(Map.of("error", "Cannot disable admin account"));

        user.setActive(!user.isActive());
        userRepository.save(user);

        return ResponseEntity.ok(Map.of(
            "success", true,
            "active", user.isActive(),
            "message", user.getName() + " is now " + (user.isActive() ? "enabled" : "disabled")
        ));
    }

    // ── DELETE USER ────────────────────────────────────────────────────────────
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        if (id == null) return ResponseEntity.badRequest().body(Map.of("error", "Invalid ID"));

        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isEmpty()) return ResponseEntity.notFound().build();

        if (userOpt.get().getRole().equals("ADMIN"))
            return ResponseEntity.badRequest().body(Map.of("error", "Cannot delete admin account"));

        userRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("success", true, "message", "User deleted successfully"));
    }
}