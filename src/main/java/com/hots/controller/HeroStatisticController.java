package com.hots.controller;

import com.hots.model.HeroDetails;
import com.hots.model.StatisticHeroes;
import com.hots.service.HeroDetailsService;
import com.hots.service.HeroStatisticService;
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
@RequestMapping("/api/v1/public/heroStatistic")
public class HeroStatisticController {

    @Autowired
    HeroStatisticService heroStatisticService;

    @GetMapping("/{id}")
    StatisticHeroes findById(@PathVariable Long id){
        return heroStatisticService.findById(id);
    }

    @GetMapping("/")
    List<StatisticHeroes> findAll(){
        return heroStatisticService.findAll();
    }
}
