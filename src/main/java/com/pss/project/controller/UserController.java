package com.pss.project.controller;

import com.pss.project.model.User;
import com.pss.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    UserService userService;

    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<User> register(@ModelAttribute("user") User user){
        return userService.registerUser(user);
    }

    @GetMapping("/all")
    @ResponseBody
    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @PutMapping("/change")
    public ResponseEntity<User> changePassword(@RequestParam("id") Long id,
                               @RequestParam("pwd") String pwd){
        return userService.changePassword(id, pwd);
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public ResponseEntity<Boolean> deleteById(@RequestParam("id") Long id){
        return userService.deleteUserById(id);
    }

    @GetMapping("/allByRole")
    @ResponseBody
    public List<User> getAllByRole(@RequestParam("name") String name){
        return userService.getAllUsersByRoleName(name);
    }
}
