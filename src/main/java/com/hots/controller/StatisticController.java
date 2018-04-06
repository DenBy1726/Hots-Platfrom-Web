package com.hots.controller;

import com.hots.model.HeroClusters;
import com.hots.model.Statistic;
import com.hots.service.HeroClustersService;
import com.hots.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/statistic")
public class StatisticController {

    @Autowired
    StatisticService statisticService;

   /* @GetMapping("/{id}")
    HeroClusters findById(@PathVariable Long id){
        return heroClustersService.findById(id);
    }
*/
    @GetMapping("/")
    List<Statistic> findAll(@RequestParam(value = "hero",required = false) Long heroId,
                            @RequestParam(value = "map", required = false) Long mapId){
        if(heroId == null && mapId == null)
            return statisticService.findAll();
        else if(heroId == null)
            return statisticService.findByMapId(mapId);
        else if(mapId == null)
            return statisticService.findByHeroId(heroId);
        else
            return statisticService.findByHeroIdAndMapId(heroId,mapId);

    }

}
