package com.hots.controller.dictionary;

import com.hots.model.dictionary.GameMode;
import com.hots.model.dictionary.HeroGroup;
import com.hots.service.dictionary.GameModeService;
import com.hots.service.dictionary.HeroGroupService;
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
@RequestMapping("/api/v1/public/herogroup")
public class HeroGroupController {
    @Autowired
    HeroGroupService heroGroupService;

    @GetMapping("/{id}")
    HeroGroup findById(@PathVariable Long id){
        return heroGroupService.findById(id);
    }

    @GetMapping("/")
    List<HeroGroup> findAll(){
        return heroGroupService.findAll();
    }
}
