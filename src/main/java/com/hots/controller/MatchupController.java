package com.hots.controller;

import com.hots.model.Matchup;
import com.hots.model.Statistic;
import com.hots.service.MatchupService;
import com.hots.service.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/matchup")
public class MatchupController {

    @Autowired
    MatchupService matchupService;

    @GetMapping("/{id1}/{id2}")
    List<Matchup> findAll(@PathVariable(value = "id1", required = false) Long firstId,
                          @PathVariable(value = "id2", required = false) Long secondId) {
        return matchupService.findByFirstAndSecond(firstId, secondId);
    }

    @GetMapping("/{id1}")
    List<Matchup> findAll(@PathVariable(value = "id1", required = false) Long firstId) {
        return matchupService.findByFirst(firstId);
    }

    @GetMapping("/")
    Matchup[][] findAll() {
        List<Matchup> matchupes = matchupService.findAll();
        long maxFirst = matchupes.stream()
                .max(Comparator.comparingLong(Matchup::getFirst))
                .get().getFirst();
        long maxSecond = matchupes.stream()
                .max(Comparator.comparingLong(Matchup::getSecond))
                .get().getSecond();
        Matchup[][] result = new Matchup[(int) maxFirst + 1][(int) maxSecond + 1];
        matchupes.forEach(x -> result[(int) x.getFirst()][(int) x.getSecond()] = x);
        return result;
    }
}
