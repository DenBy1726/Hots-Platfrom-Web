package com.hots.repository;

import com.hots.model.Hero;
import com.hots.model.Statistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Repository
public interface StatisticRepository extends JpaRepository<Statistic, Long> {

    @Query("select stat from Statistic stat " +
            "inner join stat.map map " +
            "where map.id = :mapId")
    List<Statistic> findByMapId(@Param("mapId") long mapId);

    @Query("select stat from Statistic stat " +
            "inner join stat.hero hero " +
            "where hero.id = :heroId")
    List<Statistic> findByHeroId(@Param("heroId") long heroId);

    @Query("select stat from Statistic stat " +
            "inner join stat.map map " +
            "inner join stat.hero hero " +
            "where hero.id = :heroId and map.id = :mapId")
    List<Statistic> findByHeroIdAndMapId(@Param("heroId") long heroId, @Param("mapId") long mapId);
}
