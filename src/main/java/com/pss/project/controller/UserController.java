package com.pss.project.controller;

import com.pss.project.model.User;
import com.pss.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserService userService;

    //@GetMapping("/all")

}
