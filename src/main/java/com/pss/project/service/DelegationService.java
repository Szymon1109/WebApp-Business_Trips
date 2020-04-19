package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DelegationService {

    UserRepository userRepository;
    DelegationRepository delegationRepository;

    @Autowired
    DelegationService(UserRepository userRepository, DelegationRepository delegationRepository) {
        this.userRepository = userRepository;
        this.delegationRepository = delegationRepository;
    }

    public ResponseEntity<Delegation> addDelegation(Long userId, Delegation delegation){
        Optional<User> user = userRepository.findById(userId);

        if(user.isPresent()) {
            delegation.setUser(user.get());
            Delegation newDelegation = delegationRepository.save(delegation);

            return new ResponseEntity<>(newDelegation, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Boolean> removeDelegation(Long userId, Long delegationId){
        Optional<Delegation> delegation = delegationRepository.findById(delegationId);

        if(delegation.isPresent()) {
            Delegation thisDelegation = delegation.get();

            if (thisDelegation.getUser().getId().equals(userId)) {
                delegationRepository.delete(thisDelegation);
                return new ResponseEntity<>(true, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
            }
        }
        else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Delegation> changeDelegation(Long delegationId, Delegation del){
        Optional<Delegation> thisDelegation = delegationRepository.findById(delegationId);

        if(thisDelegation.isPresent()) {
            Delegation delegation = new Delegation(
                    thisDelegation.get().getId(), del.getDescription(), thisDelegation.get().getUser(), del.getDateTimeStart(),
                    del.getDateTimeStop(), del.getTravelDietAmount(), del.getBreakfastNumber(),
                    del.getDinnerNumber(), del.getSupperNumber(), del.getTransport(),
                    del.getTicketPrice(), del.getAutoCapacity(), del.getDistance(),
                    del.getAccommodationPrice(), del.getOtherTicketsPrice(),
                    del.getOtherOutlayDesc(), del.getOtherOutlayPrice());

            delegationRepository.delete(thisDelegation.get());
            delegation = delegationRepository.save(delegation);

            return new ResponseEntity<>(delegation, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public List<Delegation> getAllDelegations(){
        return delegationRepository.findAll();
    }

    public List<Delegation> getAllDelegationsOrderByDateTimeStartDesc(){
        return delegationRepository.findByOrderByDateTimeStartDesc();
    }

    public List<Delegation> getAllDelByUserByDateTimeStartDesc(Long userId){
        return delegationRepository.findAllByUserIdOrderByDateTimeStartDesc(userId);
    }
}
