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
    public List<Delegation> getAllFutureByUserInOrder(@RequestParam("email") String email){
        return delegationService.getAllFutDelByUserByDateTimeStartDesc(email);
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
