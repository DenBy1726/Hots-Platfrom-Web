package com.hots.controller.dictionary;

import com.hots.model.dictionary.Difficulty;
import com.hots.model.dictionary.Franchise;
import com.hots.service.dictionary.DifficultyService;
import com.hots.service.dictionary.FranchiseService;
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
@RequestMapping("/api/v1/public/franchise")
public class FranchiseController {
    @Autowired
    FranchiseService franchiseService;

    @GetMapping("/{id}")
    Franchise findById(@PathVariable Long id){
        return franchiseService.findById(id);
    }

    @GetMapping("/")
    List<Franchise> findAll(){
        return franchiseService.findAll();
    }
}
