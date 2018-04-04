package com.hots.service;

import com.hots.model.Hero;
import com.hots.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroService extends ReadOnlyService<Hero, HeroRepository>{
}