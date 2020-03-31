package com.pss.project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pss.project.controller.UserController;
import com.pss.project.model.User;
import com.pss.project.service.UserService;
import com.pss.project.util.Role;
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
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper mapper;

    private User user1, user2, user3, newUser;

    @Before
    public void setup() {
        user1 = new User(1L, "Alicja", "Nowak", "anianow@wp.pl",
                "pwd123", "UTP", "Bydgoszcz, ul. Kaliskiego",
                "1234567890", true, LocalDate.parse("2020-03-19"), Role.USER);

        user2 = new User(2L, "Piotr", "Kowalski", "piotr.kowalski@gmail.com",
                "qwerty", "VI LO", "Bydgoszcz, ul. Staszica",
                "321123111", true, LocalDate.parse("2020-03-19"), Role.USER);

        user3 = new User(3L, "Julia", "Zielińska", "julia@ziel.pl",
                "password", "Google", "U.S. Dolina Krzemowa",
                "1122334455", true, LocalDate.parse("2020-03-16"), Role.ADMIN);

        newUser = new User("Szymon", "Betlewski", "szymon@betlewski.pl",
                "Pa$$word", "UTP", "Bydgoszcz, ul. Kaliskiego",
                "1234567890");
    }

    @Test
    public void testUserServiceRegisterUser() throws Exception {
        String jsonNewUser = mapper.writeValueAsString(newUser);

        mvc.perform(post("/api/user/add")
                .contentType(MediaType.APPLICATION_JSON)
                .sessionAttr("user", jsonNewUser)
        ).andExpect(status().isOk());
    }

    @Test
    public void testUserServiceGetAllUsers() throws Exception {
        List<User> all = Arrays.asList(user1, user2, user3);
        given(userService.getAllUsers()).willReturn(all);

        mvc.perform(get("/api/user/all")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id").value(user1.getId()))
                .andExpect(jsonPath("$[1].id").value(user2.getId()))
                .andExpect(jsonPath("$[2].id").value(user3.getId()));
    }

    @Test
    public void testUserServiceChangePassword() throws Exception {

        mvc.perform(put("/api/user/change")
                .param("id", "3")
                .param("pwd", "zaq1@WSX")
        ).andExpect(status().isOk());
    }

    @Test
    public void testUserServiceDeleteUserById() throws Exception {

        mvc.perform(delete("/api/user/delete")
                .param("id", "5")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$").value(false));
    }

    @Test
    public void testUserServiceGetAllByRole() throws Exception {
        List<User> allAdmins = Collections.singletonList(user3);

        given(userService.getAllUsersByRoleName("ADMIN")).willReturn(allAdmins);
        mvc.perform(get("/api/user/allByRole")
                .param("name", "ADMIN")
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id").value(user3.getId()));
    }
}