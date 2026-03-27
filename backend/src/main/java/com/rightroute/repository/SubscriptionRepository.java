package com.rightroute.repository;

import com.rightroute.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByEmail(String email);
    List<Subscription> findBySchemeId(Long schemeId);
    Optional<Subscription> findByEmailAndSchemeId(String email, Long schemeId);

    @Query("SELECT COUNT(s) FROM Subscription s")
    long countAllSubscriptions();
}