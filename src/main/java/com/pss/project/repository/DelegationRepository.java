package com.pss.project.repository;

import com.pss.project.model.Delegation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DelegationRepository extends JpaRepository<Delegation, Long> {

    List<Delegation> findAllByUserId(Long id);
    List<Delegation> findByOrderByDateTimeStartDesc();
    List<Delegation> findAllByUserEmailOrderByDateTimeStartDesc(String email);
    List<Delegation> findAllByUserEmailAndConfirmed(String email, boolean isConfirmed);
    List<Delegation> findAllByUserEmailAndRequestStatus(String email, Boolean requestStatus);
    List<Delegation> findAllByRequestStatus(Boolean requestStatus);
}
