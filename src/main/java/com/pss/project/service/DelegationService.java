package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DelegationService {

    private UserRepository userRepository;
    private DelegationRepository delegationRepository;

    @Autowired
    public DelegationService(UserRepository userRepository, DelegationRepository delegationRepository) {
        this.userRepository = userRepository;
        this.delegationRepository = delegationRepository;
    }

    public List<Delegation> getAllDelegations(){
        return delegationRepository.findAll();
    }

    public List<Delegation> getAllDelegationsOrderByDateTimeStartDesc(){
        return delegationRepository.findByOrderByDateTimeStartDesc();
    }

    public List<Delegation> getAllDelByUserByDateTimeStartDesc(String email){
        return delegationRepository.findAllByUserEmailOrderByDateTimeStartDesc(email);
    }

    public List<Delegation> getAllFutDelByUserByDateTimeStartDesc(String email) {
        LocalDateTime localDateTime = LocalDateTime.now();

        return delegationRepository.findAllByUserEmailOrderByDateTimeStartDesc(email)
                .stream()
                .filter(del -> del.getDateTimeStop().isAfter(localDateTime))
                .collect(Collectors.toList());
    }

    public ResponseEntity<Delegation> addDelegation(String email, Delegation delegation){
        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()) {
            delegation.setUser(user.get());
            Delegation newDelegation = delegationRepository.save(delegation);

            return new ResponseEntity<>(newDelegation, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Delegation> changeDelegation(Long delegationId, Delegation del){
        Optional<Delegation> thisDelegation = delegationRepository.findById(delegationId);

        if(thisDelegation.isPresent()) {
            Delegation delegation = thisDelegation.get();
            try {
                delegation.setDescription(del.getDescription());
                delegation.setDateTimeStart(del.getDateTimeStart());
                delegation.setDateTimeStop(del.getDateTimeStop());
                delegation.setTravelDietAmount(del.getTravelDietAmount());
                delegation.setBreakfastNumber(del.getBreakfastNumber());
                delegation.setDinnerNumber(del.getDinnerNumber());
                delegation.setSupperNumber(del.getSupperNumber());
                delegation.setTransport(del.getTransport());
                delegation.setTicketPrice(del.getTicketPrice());
                delegation.setAutoCapacity(del.getAutoCapacity());
                delegation.setDistance(del.getDistance());
                delegation.setAccommodationPrice(del.getAccommodationPrice());
                delegation.setOtherTicketsPrice(del.getOtherTicketsPrice());
                delegation.setOtherOutlayDesc(del.getOtherOutlayDesc());
                delegation.setOtherOutlayPrice(del.getOtherOutlayPrice());

                delegation = delegationRepository.save(delegation);
            }
            catch(Exception e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(delegation, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Boolean> removeDelegation(Long delegationId){
        Optional<Delegation> delegation = delegationRepository.findById(delegationId);

        if(delegation.isPresent()) {
            Delegation thisDelegation = delegation.get();
            delegationRepository.delete(thisDelegation);

            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}
