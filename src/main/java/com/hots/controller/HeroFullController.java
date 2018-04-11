package com.hots.controller;

import com.hots.model.dictionary.Dictionary;
import com.hots.service.HeroAbstractService;
import com.hots.service.HeroFullService;
import com.hots.service.dictionary.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by Denis on 06.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/heroFull")
public class HeroFullController {

    @Autowired
    HeroFullService heroFullService;

    @GetMapping("/")
    Map<String,List<Object>> findAll(){
        return heroFullService.findAll();
    }

    @GetMapping("/{id}")
    Map<String,Object> findOne(@PathVariable Long id){
        return heroFullService.findbyId(id);
    }
}
