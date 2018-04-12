package com.hots.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by Denis on 12.04.2018.
 */
@RestController
@RequestMapping("/auth/user")
public class UserController {
    @RequestMapping("/")
    public Principal user(Principal principal) {
        return principal;
    }
}
