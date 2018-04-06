package com.hots.service;

import com.hots.model.HeroClusters;
import com.hots.model.StatisticHeroes;
import com.hots.repository.HeroClustersRepository;
import com.hots.repository.HeroStatisticRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroStatisticService extends HeroAbstractService<StatisticHeroes, HeroStatisticRepository>{
}