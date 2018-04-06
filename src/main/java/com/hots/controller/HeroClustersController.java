package com.hots.controller;

import com.hots.model.Hero;
import com.hots.model.HeroClusters;
import com.hots.service.HeroClustersService;
import com.hots.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/heroClusters")
public class HeroClustersController {

    @Autowired
    HeroClustersService heroClustersService;

    @GetMapping("/{id}")
    HeroClusters findById(@PathVariable Long id){
        return heroClustersService.findById(id);
    }

    @GetMapping("/")
    List<HeroClusters> findAll(){
        return heroClustersService.findAll();
    }
}
