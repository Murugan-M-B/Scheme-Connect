package com.rightroute.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "eligibility_rule")
public class EligibilityRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "scheme_id")
    private Scheme scheme;

    private int minAge;
    private int maxAge;
    private double maxIncome;
    private String gender;   // "Male", "Female", or null = any
    private String category; // "SC", "BC", etc., or null = any

    // ── Getters & Setters ─────────────────────────────────────────────────────

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Scheme getScheme() { return scheme; }
    public void setScheme(Scheme scheme) { this.scheme = scheme; }

    public int getMinAge() { return minAge; }
    public void setMinAge(int minAge) { this.minAge = minAge; }

    public int getMaxAge() { return maxAge; }
    public void setMaxAge(int maxAge) { this.maxAge = maxAge; }

    public double getMaxIncome() { return maxIncome; }
    public void setMaxIncome(double maxIncome) { this.maxIncome = maxIncome; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}