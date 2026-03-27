package com.rightroute.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "subscriptions", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"email", "scheme_id"})
})
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(name = "scheme_id", nullable = false)
    private Long schemeId;

    @Column(name = "scheme_name")
    private String schemeName;

    @Column(name = "subscribed_at")
    private LocalDateTime subscribedAt = LocalDateTime.now();
}