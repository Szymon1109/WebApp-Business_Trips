package com.pss.project.config;

import com.pss.project.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    public SecurityConfig(UserDetailsServiceImpl userDetailsServiceImpl) {
        this.userDetailsServiceImpl = userDetailsServiceImpl;
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsServiceImpl);
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
