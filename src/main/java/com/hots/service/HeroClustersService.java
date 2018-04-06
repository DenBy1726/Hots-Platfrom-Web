package com.hots.service;

import com.hots.model.Hero;
import com.hots.model.HeroClusters;
import com.hots.repository.HeroClustersRepository;
import com.hots.repository.HeroRepository;
import org.springframework.stereotype.Service;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroClustersService extends HeroAbstractService<HeroClusters, HeroClustersRepository>{
}