package com.hots.controller.dictionary;

import com.hots.model.dictionary.HeroGroup;
import com.hots.model.dictionary.HeroSubgroup;
import com.hots.service.dictionary.HeroGroupService;
import com.hots.service.dictionary.HeroSubgroupService;
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
@RequestMapping("/api/v1/public/herosubgroup")
public class HeroSubgroupController {
    @Autowired
    HeroSubgroupService heroSubgroupService;

    @GetMapping("/{id}")
    HeroSubgroup findById(@PathVariable Long id){
        return heroSubgroupService.findById(id);
    }

    @GetMapping("/")
    List<HeroSubgroup> findAll(){
        return heroSubgroupService.findAll();
    }
}
