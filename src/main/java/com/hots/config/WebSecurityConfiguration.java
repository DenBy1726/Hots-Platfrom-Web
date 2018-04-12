package com.hots.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.Filter;

/**
 * Created by Denis on 12.04.2018.
 */

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
@EnableOAuth2Client
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    OAuth2ClientContext oauth2ClientContext;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .addFilterBefore(ssoFilter(), BasicAuthenticationFilter.class)
                .csrf()
                .disable()
                .antMatcher("/**")
                .authorizeRequests()
                .antMatchers("/api/v1/public/**")
                .permitAll()
                .antMatchers("/auth/**")
                .permitAll()
                .antMatchers("/login","/login.html")
                .permitAll()
                .antMatchers("/api/v1/private/**")
                .hasAuthority("ROLE_USER")
                .anyRequest()
                .authenticated();
        http
                .logout()
                .logoutUrl("/auth/logout")
                .and()
                .formLogin()
                .loginPage("/login.html")
                .defaultSuccessUrl("/auth/login?success");
    }

    @Bean
    @ConfigurationProperties("google.client")
    public AuthorizationCodeResourceDetails google() {
        return new AuthorizationCodeResourceDetails();
    }

    @Bean
    @ConfigurationProperties("google.resource")
    public ResourceServerProperties googleResource() {
        return new ResourceServerProperties();
    }

    private Filter ssoFilter() {
        OAuth2ClientAuthenticationProcessingFilter googleFilter = new OAuth2ClientAuthenticationProcessingFilter("/login/google");
        OAuth2RestTemplate facebookTemplate = new OAuth2RestTemplate(google(), oauth2ClientContext);
        googleFilter.setRestTemplate(facebookTemplate);
        UserInfoTokenServices tokenServices = new UserInfoTokenServices(googleResource().getUserInfoUri(), google().getClientId());
        tokenServices.setRestTemplate(facebookTemplate);
        googleFilter.setTokenServices(tokenServices);
        return googleFilter;
    }

    @Bean
    public FilterRegistrationBean oauth2ClientFilterRegistration(
            OAuth2ClientContextFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(filter);
        registration.setOrder(-100);
        return registration;
    }

}