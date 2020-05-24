package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.Role;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.RoleRepository;
import com.pss.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private UserRepository userRepository;
    private DelegationRepository delegationRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository,
                       DelegationRepository delegationRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.delegationRepository = delegationRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public List<User> getAllUsersNotAdmins(){
        Role role = roleRepository.findByRoleName("ADMIN");
        return userRepository.findAllByRolesNotContains(role);
    }

    public List<User> getAllUsersByRoleName(String roleName){
        Role role = roleRepository.findByRoleName(roleName);
        return userRepository.findAllByRolesContains(role);
    }

    public User getUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }

    public ResponseEntity<Boolean> login() {
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    public Boolean emailExisting(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public ResponseEntity<User> registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        else if (user.getPassword().matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$")) {
            try {
                user.setPassword(passwordEncoder.encode(user.getPassword()));

                Role role = roleRepository.findByRoleName("USER");
                Set<Role> roles = new HashSet<>();
                roles.add(role);
                user.setRoles(roles);

                user = userRepository.save(user);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }

    public ResponseEntity<User> editUser(String email, User newUser) {
        Optional<User> oldUser = userRepository.findByEmail(email);

        if(oldUser.isPresent()) {
            User user = oldUser.get();
            try {
                user.setName(newUser.getName());
                user.setLastName(newUser.getLastName());
                user.setCompanyName(newUser.getCompanyName());
                user.setCompanyAddress(newUser.getCompanyAddress());
                user.setCompanyNip(newUser.getCompanyNip());
                user = userRepository.save(user);
            }
            catch(Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> changePassword(String email, String newPassword){
        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()) {
            if (newPassword.matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$")) {
                User userSave = user.get();
                try {
                    userSave.setPassword(passwordEncoder.encode(newPassword));
                    userSave = userRepository.save(userSave);
                } catch (Exception e) {
                    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>(userSave, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<User> makeUserAdmin(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if(userOptional.isPresent()) {
            User user = userOptional.get();
            Role adminRole = roleRepository.findByRoleName("ADMIN");
            try {
                Set<Role> roles = user.getRoles();
                roles.add(adminRole);
                user.setRoles(roles);

                user = userRepository.save(user);
            }
            catch(Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Boolean> deleteUserById(Long userId){
        List<Delegation> delegations = delegationRepository.findAllByUserId(userId);
        delegationRepository.deleteAll(delegations);

        if(userRepository.findById(userId).isPresent()) {
            userRepository.deleteById(userId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}