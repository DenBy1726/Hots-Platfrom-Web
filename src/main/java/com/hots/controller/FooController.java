package com.hots.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Denis on 03.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/")
public class FooController {

    @GetMapping("test")
    private String test(){
        return "test";
    }
}
