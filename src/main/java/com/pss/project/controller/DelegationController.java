package com.pss.project.controller;

import com.pss.project.model.Delegation;
import com.pss.project.service.DelegationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delegation")
@CrossOrigin
public class DelegationController {

    private DelegationService delegationService;

    @Autowired
    public DelegationController(DelegationService delegationService) {
        this.delegationService = delegationService;
    }

    @GetMapping("/all")
    @ResponseBody
    public List<Delegation> getAll(){
        return delegationService.getAllDelegations();
    }

    @GetMapping("/allInOrder")
    @ResponseBody
    public List<Delegation> getAllInOrder(){
        return delegationService.getAllDelegationsOrderByDateTimeStartDesc();
    }

    @GetMapping("/allByUser")
    @ResponseBody
    public List<Delegation> getAllByUserInOrder(@RequestParam("email") String email){
        return delegationService.getAllDelByUserByDateTimeStartDesc(email);
    }

    @GetMapping("/futureByUser")
    @ResponseBody
    public List<Delegation> getAllFutureAndNotConfirmedByUserInOrder(@RequestParam("email") String email){
        return delegationService.getAllFutAndNotConfirmedDelByUserByDateTimeStartDesc(email);
    }

    @GetMapping("/allByUserAndConfirmation")
    @ResponseBody
    public List<Delegation> getAllByUserAndConfirmation(@RequestParam("email") String email,
                                                        @RequestParam("isConfirmed") boolean isConfirmed){
        return delegationService.getAllDelByUserByConfirmation(email, isConfirmed);
    }

    @GetMapping("/allNotRequestedByUserAndConfirmation")
    @ResponseBody
    public List<Delegation> getAllNotRequestedByUserAndConfirmation(@RequestParam("email") String email,
                                                                    @RequestParam("isConfirmed") boolean isConfirmed){
        return delegationService.getAllNotRequestedDelByUserByConfirmation(email, isConfirmed);
    }

    @GetMapping("/allByStatus")
    @ResponseBody
    public List<Delegation> getAllByRequestStatus(@RequestParam("status") Boolean status){
        return delegationService.getAllDelByRequestStatus(status);
    }

    @PutMapping("/requestByStatus")
    public ResponseEntity<Delegation> requestByStatus(@RequestParam("id") Long id,
                                                      @RequestBody Boolean status){
        return delegationService.requestByStatus(id, status);
    }

    @PutMapping("/answerRequestById")
    public ResponseEntity<Delegation> answerRequestById(@RequestParam("id") Long id){
        return delegationService.answerRequestById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<Delegation> add(@RequestParam("email") String email,
                                          @RequestBody Delegation delegation){
        return delegationService.addDelegation(email, delegation);
    }

    @PutMapping("/change")
    public ResponseEntity<Delegation> change(@RequestParam("id") Long id,
                                             @RequestBody Delegation delegation){
        return delegationService.changeDelegation(id, delegation);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Boolean> remove(@RequestParam("id") Long delegationId){
        return delegationService.removeDelegation(delegationId);
    }
}