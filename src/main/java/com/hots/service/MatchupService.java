package com.hots.service;

import com.hots.model.Matchup;
import com.hots.model.Statistic;
import com.hots.repository.MatchupRepository;
import com.hots.repository.StatisticRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Denis on 06.04.2018.
 */
@Service
public class MatchupService {
    @Autowired
    MatchupRepository matchupRepository;

    public List<Matchup> findByFirst(Long id){
        return matchupRepository.findByFirst(id);
    }

    public List<Matchup> findByFirstAndSecond(Long id,Long id2){
        return matchupRepository.findByFirstAndSecond(id,id2);
    }

    public List<Matchup> findAll(){
        return matchupRepository.findAll();
    }

}
