package com.rightroute.service;

import com.rightroute.model.Scheme;
import com.rightroute.model.EligibilityRule;
import com.rightroute.model.EligibilityResult;
import com.rightroute.dto.UserDataDTO;
import com.rightroute.repository.SchemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SchemeService {

    @Autowired
    private SchemeRepository schemeRepository;

    @Transactional(readOnly = true)
    public List<Scheme> getAllActiveSchemes() {
        return schemeRepository.findByActiveTrue();
    }

    @Transactional(readOnly = true)
    public Scheme getSchemeById(long id) {
        return schemeRepository.findById(id).orElse(null);
    }

    @Transactional
    public Scheme createScheme(Scheme scheme) {
        scheme.setActive(true);
        return schemeRepository.save(scheme);
    }

    @Transactional
    public Scheme updateScheme(long id, Scheme updated) {
        Scheme existing = schemeRepository.findById(id).orElse(null);
        if (existing == null) return null;
        if (updated.getTitle() != null) existing.setTitle(updated.getTitle());
        if (updated.getDescription() != null) existing.setDescription(updated.getDescription());
        if (updated.getDepartment() != null) existing.setDepartment(updated.getDepartment());
        if (updated.getCategory() != null) existing.setCategory(updated.getCategory());
        if (updated.getDeadline() != null) existing.setDeadline(updated.getDeadline());
        if (updated.getBenefits() != null) existing.setBenefits(updated.getBenefits());
        if (updated.getOfficialUrl() != null) existing.setOfficialUrl(updated.getOfficialUrl());
        if (updated.getEligibilityRule() != null) existing.setEligibilityRule(updated.getEligibilityRule());
        return schemeRepository.save(existing);
    }

    @Transactional
    public boolean deleteScheme(long id) {
        if (!schemeRepository.existsById(id)) return false;
        schemeRepository.deleteById(id);
        return true;
    }

    @Transactional(readOnly = true)
    public EligibilityResult checkEligibility(long schemeId, UserDataDTO userData) {
        if (userData == null)
            return new EligibilityResult(false, "User data is required");
        if (userData.getAge() <= 0)
            return new EligibilityResult(false, "Valid age is required");

        Scheme scheme = getSchemeById(schemeId);
        if (scheme == null)
            return new EligibilityResult(false, "Scheme not found");

        EligibilityRule rule = scheme.getEligibilityRule();
        if (rule == null)
            return new EligibilityResult(true, "You are eligible to apply for this scheme");

        if (rule.getMinAge() > 0 && userData.getAge() < rule.getMinAge())
            return new EligibilityResult(false,
                String.format("You must be at least %d years old (You are %d)", rule.getMinAge(), userData.getAge()));

        if (rule.getMaxAge() > 0 && userData.getAge() > rule.getMaxAge())
            return new EligibilityResult(false,
                String.format("You must be no older than %d years old (You are %d)", rule.getMaxAge(), userData.getAge()));

        if (rule.getMaxIncome() > 0 && userData.getIncome() > rule.getMaxIncome())
            return new EligibilityResult(false,
                String.format("Annual income must be below Rs.%,.0f (yours: Rs.%,.0f)", rule.getMaxIncome(), userData.getIncome()));

        String requiredGender = rule.getGender();
        if (requiredGender != null && !requiredGender.isBlank()) {
            if (userData.getGender() == null || !userData.getGender().equalsIgnoreCase(requiredGender))
                return new EligibilityResult(false,
                    String.format("This scheme is only for %s applicants", requiredGender));
        }

        String requiredCategory = rule.getCategory();
        if (requiredCategory != null && !requiredCategory.isBlank()) {
            if (userData.getCategory() == null || !userData.getCategory().equalsIgnoreCase(requiredCategory))
                return new EligibilityResult(false,
                    String.format("You must be from '%s' category", requiredCategory));
        }

        return new EligibilityResult(true, "You are eligible to apply for this scheme");
    }
}