package com.rightroute.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Table(name = "schemes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Scheme {

    @Id
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String department;
    private String category;
    private String deadline;

    @Column(columnDefinition = "TEXT")
    private String benefits;

    private String officialUrl;

    private boolean active = true;

    @JsonIgnore
    @OneToOne(mappedBy = "scheme", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private EligibilityRule eligibilityRule;

    @JsonIgnore
    @OneToMany(mappedBy = "scheme", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<RequiredDocument> requiredDocumentsList;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDeadline() { return deadline; }
    public void setDeadline(String deadline) { this.deadline = deadline; }

    public String getBenefits() { return benefits; }
    public void setBenefits(String benefits) { this.benefits = benefits; }

    public String getOfficialUrl() { return officialUrl; }
    public void setOfficialUrl(String officialUrl) { this.officialUrl = officialUrl; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public EligibilityRule getEligibilityRule() { return eligibilityRule; }
    public void setEligibilityRule(EligibilityRule rule) { this.eligibilityRule = rule; }

    public List<RequiredDocument> getRequiredDocumentsList() { return requiredDocumentsList; }
    public void setRequiredDocumentsList(List<RequiredDocument> list) { this.requiredDocumentsList = list; }

    @Transient
    public List<String> getRequiredDocuments() {
        if (requiredDocumentsList == null) return List.of();
        return requiredDocumentsList.stream()
                .map(RequiredDocument::getDocumentName)
                .toList();
    }
}