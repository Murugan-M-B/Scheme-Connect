package com.rightroute.repository;

import com.rightroute.model.Scheme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchemeRepository extends JpaRepository<Scheme, Long> {
    List<Scheme> findByActiveTrue();
    List<Scheme> findByCategory(String category);
}