package com.hots.controller.dictionary;

import com.hots.model.dictionary.Difficulty;
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
@RequestMapping("/api/v1/public/difficulty")
public class DifficultyController {
    @Autowired
    DifficultyService difficultyService;

    @GetMapping("/{id}")
    Difficulty findById(@PathVariable Long id){
        return difficultyService.findById(id);
    }

    @GetMapping("/")
    List<Difficulty> findAll(){
        return difficultyService.findAll();
    }
}
