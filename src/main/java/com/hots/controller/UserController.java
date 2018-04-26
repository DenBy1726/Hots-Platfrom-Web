package com.hots.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by Denis on 12.04.2018.
 */
@RestController
@RequestMapping("/auth")
public class UserController {
    @RequestMapping("/user")
    public Object user() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth instanceof OAuth2Authentication){
            return ((OAuth2Authentication)auth).getUserAuthentication().getDetails();
        }
        else{
            return null;
        }
    }
}
