package com.hots.controller;

import com.hots.model.Hero;
import com.hots.model.Network;
import com.hots.model.TrainingMeta;
import com.hots.service.HeroService;
import com.hots.service.NeuralNetworkService;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/forecast")
public class ForecastController {

    @Autowired
    NeuralNetworkService neuralNetworkService;

    @GetMapping("/{heroes}")
    public List<Pair<Network,Double>> findById(@PathVariable String[] heroes) throws Exception {
        if(heroes.length< 10)
            throw new Exception("heroes count must be equal 10");
        Integer[] heroesIds = Arrays.stream(heroes).map(Integer::parseInt).toArray(Integer[]::new);
        return neuralNetworkService.compute(heroesIds);
    }

}
