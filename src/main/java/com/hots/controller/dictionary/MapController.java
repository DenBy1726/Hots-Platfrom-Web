package com.hots.controller.dictionary;

import com.hots.model.dictionary.HeroSubgroup;
import com.hots.model.dictionary.Map;
import com.hots.service.dictionary.HeroSubgroupService;
import com.hots.service.dictionary.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/map")
public class MapController {
    @Autowired
    MapService mapService;

    @GetMapping("/{id}")
    @ResponseBody
    Map findById(@PathVariable Long id){
        return mapService.findById(id);
    }

    @GetMapping("/")
    @ResponseBody
    List<Map> findAll(){
        return mapService.findAll();
    }
}
