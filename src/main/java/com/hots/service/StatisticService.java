package com.hots.service;

import com.hots.model.Statistic;
import com.hots.repository.StatisticRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Denis on 06.04.2018.
 */
@Service
public class StatisticService {
    @Autowired
    StatisticRepository statisticRepository;

    public List<Statistic> findByHeroId(Long id){
        return statisticRepository.findByHeroId(id);
    }

    public List<Statistic> findByMapId(Long id){
        return statisticRepository.findByMapId(id);
    }

    public List<Statistic> findByHeroIdAndMapId(Long id,Long mapId){
        return statisticRepository.findByHeroIdAndMapId(id,mapId);
    }

    public List<Statistic> findAll(){
        return statisticRepository.findAll();
    }

}
