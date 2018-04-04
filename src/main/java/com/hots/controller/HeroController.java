package com.hots.controller;

import com.hots.model.Hero;
import com.hots.model.dictionary.Difficulty;
import com.hots.service.HeroService;
import com.hots.service.dictionary.DifficultyService;
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
@RequestMapping("/api/v1/public/hero")
public class HeroController {

    @Autowired
    HeroService heroService;

    @GetMapping("/{id}")
    Hero findById(@PathVariable Long id){
        return heroService.findById(id);
    }

    @GetMapping("/")
    List<Hero> findAll(){
        return heroService.findAll();
    }
}
