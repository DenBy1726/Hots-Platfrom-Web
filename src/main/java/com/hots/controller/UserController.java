package com.hots.controller;

import com.hots.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;

/**
 * Created by Denis on 12.04.2018.
 */
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

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
