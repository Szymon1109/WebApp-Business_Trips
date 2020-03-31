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
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "genA")
    @SequenceGenerator(name = "genA", initialValue = 1)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private String companyName;

    @NotNull
    private String companyAddress;

    @NotNull
    private String companyNip;

    private Boolean status = true;
    private LocalDate registrationDate = LocalDate.now();
    private Role role = Role.USER;

    public User(String name, String lastName, String email, String password,
                String companyName, String companyAddress, String companyNip) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.companyNip = companyNip;
    }
}
