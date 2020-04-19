package com.pss.project.repository;

import com.pss.project.model.User;
import com.pss.project.util.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAllByRole(Role role);
    Optional<User> findByEmail(String email);
}
