package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import com.pss.project.util.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;
    DelegationRepository delegationRepository;

    @Autowired
    UserService(UserRepository userRepository, DelegationRepository delegationRepository){
        this.userRepository = userRepository;
        this.delegationRepository = delegationRepository;
    }

    public ResponseEntity<User> registerUser(User user){
        if(userRepository.findByEmail(user.getEmail()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            user = userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public ResponseEntity<User> changePassword(Long userId, String newPassword){
        Optional<User> user = userRepository.findById(userId);

        if(user.isPresent()) {
            User userSave = user.get();
            userSave.setPassword(newPassword);
            userSave = userRepository.save(userSave);

            return new ResponseEntity<>(userSave, HttpStatus.OK);
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

    public List<User> getAllUsersByRoleName(String roleName){
        Role role = Role.valueOf(roleName);
        return userRepository.findAllByRole(role);
    }
}
