package com.pss.project.model;

import com.pss.project.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private Boolean status = true;
    private LocalDate registrationDate = LocalDate.now();
    private Role role = Role.ROLE_USER;

    @NotNull
    private String companyName;

    @NotNull
    private String companyAddress;

    @NotNull
    private String companyNip;
}
