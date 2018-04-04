package com.hots.controller.dictionary;

import com.hots.model.dictionary.Franchise;
import com.hots.model.dictionary.GameMode;
import com.hots.service.dictionary.FranchiseService;
import com.hots.service.dictionary.GameModeService;
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
@RequestMapping("/api/v1/public/gamemode")
public class GameModeController {
    @Autowired
    GameModeService gameModeService;

    @GetMapping("/{id}")
    GameMode findById(@PathVariable Long id){
        return gameModeService.findById(id);
    }

    @GetMapping("/")
    List<GameMode> findAll(){
        return gameModeService.findAll();
    }
}
