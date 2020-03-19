package com.pss.project.service;

import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class InitService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DelegationRepository delegationRepository;

    @PostConstruct
    public void init(){

    }
}
