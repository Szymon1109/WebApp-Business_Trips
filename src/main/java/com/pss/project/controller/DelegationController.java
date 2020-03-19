package com.pss.project.controller;

import com.pss.project.service.DelegationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/delegation")
public class DelegationController {

    @Autowired
    DelegationService delegationService;

    //@GetMapping("/all")
}
