package com.pss.project.service;

import com.pss.project.model.Delegation;
import com.pss.project.model.User;
import com.pss.project.repository.DelegationRepository;
import com.pss.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DelegationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DelegationRepository delegationRepository;

    public void addDelegation(Long userId, Delegation delegation){
        Optional<User> user = userRepository.findById(userId);

        user.ifPresent(thisUser -> {
            delegation.setUser(thisUser);
            delegationRepository.save(delegation);
        });
    }

    public boolean removeDelegation(Long userId, Long delegationId){
        Optional<Delegation> delegation = delegationRepository.findById(delegationId);

        if(delegation.isPresent()) {
            Delegation thisDelegation = delegation.get();

            if (thisDelegation.getUser().getId().equals(userId)) {
                delegationRepository.delete(thisDelegation);
                return true;
            }
        }
        return false;
    }

    public void changeDelegation(Long delegationId, Delegation del){
        Optional<Delegation> thisDelegation = delegationRepository.findById(delegationId);

        thisDelegation.ifPresent(value -> {
            Delegation delegation = new Delegation(
                    value.getId(), del.getDescription(), value.getUser(), del.getDateTimeStart(),
                    del.getDateTimeStop(), del.getTravelDietAmount(), del.getBreakfastNumber(),
                    del.getDinnerNumber(), del.getSupperNumber(), del.getTransport(),
                    del.getTicketPrice(), del.getAutoCapacity(), del.getDistance(),
                    del.getAccommodationPrice(), del.getOtherTicketsPrice(),
                    del.getOtherOutlayDesc(), del.getOtherOutlayPrice());

            delegationRepository.delete(value);
            delegationRepository.save(delegation);
        });
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
