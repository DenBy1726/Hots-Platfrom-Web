package com.hots.repository;

import com.hots.model.Hero;
import com.hots.model.dictionary.Map;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 04.04.2018.
 */
public interface HeroRepository extends JpaRepository<Hero,Long> {
}
