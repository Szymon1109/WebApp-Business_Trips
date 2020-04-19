package com.pss.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("user")
                .password("password").roles("USER");
    }

    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/api/user/all").hasRole("ADMIN")
                .and().authorizeRequests().antMatchers("/api/user/allByRole").hasRole("ADMIN")
                .and().authorizeRequests().antMatchers("/api/delegation/all").hasRole("ADMIN")
                .and().authorizeRequests().antMatchers("/api/delegation/allInOrder").hasRole("ADMIN")
                .and().authorizeRequests().antMatchers("/api/user/**").authenticated()
                .and().authorizeRequests().antMatchers("/api/delegation/**").authenticated()
                .and().authorizeRequests().antMatchers("/menu").authenticated()
                .and().authorizeRequests().antMatchers("/register").permitAll()
                .and().formLogin().loginPage("/login").permitAll()
                .and().logout().logoutSuccessUrl("/login");
    }
}
