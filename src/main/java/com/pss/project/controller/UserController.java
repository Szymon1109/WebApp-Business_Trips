package com.pss.project.controller;

import com.pss.project.model.User;
import com.pss.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    @ResponseBody
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping("/allByRole")
    @ResponseBody
    public List<User> getAllByRole(@RequestParam("name") String name){
        return userService.getAllUsersByRoleName(name);
    }

    @GetMapping("/byEmail")
    @ResponseBody
    public User getUserByEmail(@RequestParam("email") String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping("/auth")
    public ResponseEntity<Boolean> authentication() {
        return userService.login();
    }

    @GetMapping("/exist")
    @ResponseBody
    public Boolean checkEmailExisting(@RequestParam("email") String email) {
        return userService.emailExisting(email);
    }

    @PostMapping("/add")
    public ResponseEntity<User> register(@RequestBody User user){
        return userService.registerUser(user);
    }

    @PutMapping("/edit")
    public ResponseEntity<User> editUser(@RequestParam("email") String email,
                                         @RequestBody User user) {
        return userService.editUser(email, user);
    }

    @PutMapping("/change")
    public ResponseEntity<User> changePassword(@RequestParam("email") String email,
                                               @RequestBody String pwd){
        return userService.changePassword(email, pwd);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Boolean> deleteById(@RequestParam("id") Long id){
        return userService.deleteUserById(id);
    }
}
