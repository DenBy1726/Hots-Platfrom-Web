package com.hots.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

/**
 * Created by Denis on 03.04.2018.
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true,prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    // регистрируем нашу реализацию UserDetailsService
    // а также PasswordEncoder для приведения пароля в формат SHA1
 /*   @Autowired
    public void registerGlobalAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService);
    }*/

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .authorizeRequests()
                .antMatchers("/api/v1/public/**").permitAll()
                .antMatchers("/api/v1/private/**").authenticated()
                .anyRequest().authenticated();

        // включаем защиту от CSRF атак
        http.csrf()
                .disable()
                // указываем правила запросов
                // по которым будет определятся доступ к ресурсам и остальным данным
                .authorizeRequests()
                .antMatchers("/resources/**", "/**").permitAll()
                .anyRequest().permitAll();

        http.formLogin()
                // указываем страницу с формой логина
                .loginPage("/login")
                // указываем action с формы логина
                .loginProcessingUrl("/auth/v1/login")
                // указываем URL при неудачном логине
                .failureUrl("/login?error")
                // Указываем параметры логина и пароля с формы логина
                .usernameParameter("username")
                .passwordParameter("password")
                // даем доступ к форме логина всем
                .permitAll()
                .defaultSuccessUrl("/", false);

        http.logout()
                // разрешаем делать логаут всем
                .permitAll()
                // указываем URL логаута
                .logoutUrl("/auth/v1/logout")
                // указываем URL при удачном логауте
                .logoutSuccessUrl("/login?logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .deleteCookies("remember-me-cookie");

        //remember me configuration
    /*    http.rememberMe().
                rememberMeParameter("remember-me-parameter").
                rememberMeCookieName("remember-me-cookie").
                tokenValiditySeconds(64000)
                .tokenRepository(persistentTokenRepository());*/

    }

    @Bean
    BCryptPasswordEncoder getShaPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

 /*   @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        JdbcTokenRepositoryImpl db = new JdbcTokenRepositoryImpl();
 //       db.setDataSource(dataSource);
        return db;
    }*/

    @Bean
    public SavedRequestAwareAuthenticationSuccessHandler
    savedRequestAwareAuthenticationSuccessHandler() {
        SavedRequestAwareAuthenticationSuccessHandler auth
                = new SavedRequestAwareAuthenticationSuccessHandler();
        auth.setTargetUrlParameter("targetUrl");
        return auth;
    }
}