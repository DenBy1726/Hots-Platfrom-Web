package com.hots.controller;

import com.hots.model.HeroClusters;
import com.hots.model.HeroDetails;
import com.hots.repository.HeroDetailsRepository;
import com.hots.service.HeroClustersService;
import com.hots.service.HeroDetailsService;
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
@RequestMapping("/api/v1/public/heroDetails")
public class HeroDetailsController {

    @Autowired
    HeroDetailsService heroDetailsService;

    @GetMapping("/{id}")
    HeroDetails findById(@PathVariable Long id){
        return heroDetailsService.findById(id);
    }

    @GetMapping("/")
    List<HeroDetails> findAll(){
        return heroDetailsService.findAll();
    }
}
