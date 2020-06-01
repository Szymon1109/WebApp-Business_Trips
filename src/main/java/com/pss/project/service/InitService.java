package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.Role;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.RoleRepository;
import com.pss.project.repository.UserRepository;
import com.pss.project.util.AutoCapacity;
import com.pss.project.util.Transport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
public class InitService {
/*
    private UserRepository userRepository;
    private DelegationRepository delegationRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public InitService(UserRepository userRepository,
                       DelegationRepository delegationRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.delegationRepository = delegationRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void init(){
        Role r1 = new Role(0L, "USER");
        Role r2 = new Role(0L, "ADMIN");

        r1 = roleRepository.save(r1);
        r2 = roleRepository.save(r2);

        Set<Role> userSet = new HashSet<>();
        userSet.add(r1);

        Set<Role> adminSet = new HashSet<>();
        adminSet.add(r2);

        User u1 = new User("Szymon", "Betlewski", "szybet1@gmail.com",
                passwordEncoder.encode("Kosciotrup1!"), "UTP", "Bydgoszcz, ul. Kaliskiego 7",
                "5540313107", adminSet);

        User u2 = new User("Adam", "Nowak", "adam.nowak@gmail.com",
                passwordEncoder.encode("Pa$$word1"), "VI Liceum Ogólnokształcące", "Bydgoszcz, ul. Staszica 4",
                "5541101330", userSet);

        User u3 = new User(0L, "Julia", "Zielińska", "julia@ziel.pl",
                passwordEncoder.encode("Pa$$word1"), "UTP", "Bydgoszcz, ul. Kaliskiego 7",
                "5540313107", true, LocalDate.now().minusDays(2), userSet);

        u1 = userRepository.save(u1);
        u2 = userRepository.save(u2);
        u3 = userRepository.save(u3);

        Delegation d1 = new Delegation("Spotkanie z klientem", u2,
                LocalDateTime.now().minusHours(5), LocalDateTime.now().plusHours(5),
                Transport.TRAIN, 58, null, null,
                80, 12, null, 0);

        Delegation d2 = new Delegation(0L, "Kurs nauczania", u3,
                LocalDateTime.now().minusDays(1), LocalDateTime.now().plusDays(1),
                30, 2, 2, 2,
                Transport.CAR, null, AutoCapacity.HIGH, 200,
                50, 0, null,
                0, true, null);

        Delegation d3 = new Delegation(0L, "Szkolenie w Krakowie", u3,
                LocalDateTime.now().minusHours(10), LocalDateTime.now().plusDays(1),
                30, 2, 2, 1,
                Transport.CAR, null, AutoCapacity.MEDIUM, 600,
                100, 0, null,
                0, false, true);

        delegationRepository.saveAll(Arrays.asList(d1, d2, d3));
    }
*/
}
