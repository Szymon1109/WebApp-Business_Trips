package com.pss.project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pss.project.controller.DelegationController;
import com.pss.project.model.Delegation;
import com.pss.project.model.Role;
import com.pss.project.model.User;
import com.pss.project.service.DelegationService;
import com.pss.project.util.AutoCapacity;
import com.pss.project.util.Transport;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(DelegationController.class)
public class DelegationControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private DelegationService delegationService;

    @Autowired
    private ObjectMapper mapper;

    private Delegation delegation1, delegation2, delegation3, newDelegation;
    private Set<Role> userRole = new HashSet<>(), adminRole = new HashSet<>();

    @Before
    public void setup() {
        Role r1 = new Role(1L, "USER");
        Role r2 = new Role(2L, "ADMIN");

        userRole.add(r1);
        adminRole.add(r2);

        User user1 = new User(1L, "Alicja", "Nowak", "anianow@wp.pl",
                "pwd123", "UTP", "Bydgoszcz, ul. Kaliskiego",
                "1234567890", true, LocalDate.parse("2020-03-19"), userRole);

        User user3 = new User(3L, "Julia", "Zielińska", "julia@ziel.pl",
                "password", "Google", "U.S. Dolina Krzemowa",
                "1122334455", true, LocalDate.parse("2020-03-16"), adminRole);

        delegation1 = new Delegation(1L, "Szkolenie w Warszawie", user1,
                LocalDateTime.parse("2020-03-20T05:01:00.751660"), LocalDateTime.parse("2020-03-21T15:01:00.752677"),
                30, 2, 2, 1, Transport.CAR, null, AutoCapacity.MEDIUM,
                600, 100, 0, null, 0, false, null);

        delegation2 = new Delegation(2L, "Kurs nauczania", user1,
                LocalDateTime.parse("2020-03-19T15:01:00.752677"), LocalDateTime.parse("2020-03-21T15:01:00.752677"),
                30, 2, 2, 2, Transport.CAR, null, AutoCapacity.HIGH,
                200, 50, 0, null, 0, false, null);

        delegation3 = new Delegation(3L, "Spotkanie z klientem", user3,
                LocalDateTime.parse("2020-03-20T10:01:00.752677"), LocalDateTime.parse("2020-03-20T20:01:00.752677"),
                30, 0, 0, 0, Transport.TRAIN, 58, null,
                null, 80, 12, null, 0, false, null);

        newDelegation = new Delegation("Spotkanie", user1, LocalDateTime.now(), LocalDateTime.now(),
                Transport.TRAIN, 49, null, null, 50, 8, null, 0);
    }

    @Test
    public void testDelegationServiceAddDelegation() throws Exception {
        String jsonNewDelegation = mapper.writeValueAsString(newDelegation);

        mvc.perform(post("/api/delegation/add")
                .contentType(MediaType.APPLICATION_JSON)
                .sessionAttr("delegation", jsonNewDelegation)
                .param("id", "1")
        ).andExpect(status().isOk());
    }

    @Test
    public void testDelegationServiceRemoveDelegation() throws Exception {

        mvc.perform(delete("/api/delegation/delete")
                .param("userId", "2")
                .param("delegationId", "3")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").value(false));
    }

    @Test
    public void testDelegationServiceChangeDelegation() throws Exception {
        String jsonNewDelegation = mapper.writeValueAsString(newDelegation);

        mvc.perform(put("/api/delegation/change")
                .contentType(MediaType.APPLICATION_JSON)
                .sessionAttr("delegation", jsonNewDelegation)
                .param("id", "4")
        ).andExpect(status().isOk());
    }

    @Test
    public void testDelegationServiceGetAllDelegations() throws Exception {
        List<Delegation> all = Arrays.asList(delegation1, delegation2, delegation3);

        given(delegationService.getAllDelegations()).willReturn(all);
        mvc.perform(get("/api/delegation/all")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id").value(delegation1.getId()))
                .andExpect(jsonPath("$[1].id").value(delegation2.getId()))
                .andExpect(jsonPath("$[2].id").value(delegation3.getId()));
    }

    @Test
    public void testDelegationServiceGetAllDelegationsOrderByDateTimeStartDesc() throws Exception {
        List<Delegation> all = Arrays.asList(delegation3, delegation1, delegation2);

        given(delegationService.getAllDelegationsOrderByDateTimeStartDesc()).willReturn(all);
        mvc.perform(get("/api/delegation/allInOrder")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id").value(delegation3.getId()))
                .andExpect(jsonPath("$[1].id").value(delegation1.getId()))
                .andExpect(jsonPath("$[2].id").value(delegation2.getId()));
    }

    @Test
    public void testDelegationServiceGetAllDelByUserByDateTimeStartDesc() throws Exception {
        List<Delegation> all = Arrays.asList(delegation1, delegation2);

        given(delegationService.getAllDelByUserByDateTimeStartDesc("1L")).willReturn(all);
        mvc.perform(get("/api/delegation/allByUser")
                .param("id", "1")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id").value(delegation1.getId()))
                .andExpect(jsonPath("$[1].id").value(delegation2.getId()));
    }
}
