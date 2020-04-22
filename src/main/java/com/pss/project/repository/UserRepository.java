package com.pss.project.repository;

import com.pss.project.model.Role;
import com.pss.project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAllByRolesContains(Role role);
    Optional<User> findByEmail(String email);
}
