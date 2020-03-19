package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import com.pss.project.util.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DelegationRepository delegationRepository;

    public void registerUser(User user){
        userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public void changePassword(Long userId, String newPassword){
        Optional<User> user = userRepository.findById(userId);

        user.ifPresent(thisUser -> {
            thisUser.setPassword(newPassword);
            userRepository.save(thisUser);
        });
    }

    public boolean deleteUserById(Long userId){
        List<Delegation> delegations = delegationRepository.findAllByUserId(userId);
        delegationRepository.deleteAll(delegations);

        userRepository.deleteById(userId);
        return true;
    }

    public List<User> getAllUsersByRoleName(Role role){
        return userRepository.findAllByRole(role);
    }
}
