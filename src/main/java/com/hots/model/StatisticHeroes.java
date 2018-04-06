package com.hots.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name="statisticheroes")
public class StatisticHeroes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @OneToOne
    @PrimaryKeyJoinColumn
    private StatisticHeroesMin min;

    @OneToOne
    @PrimaryKeyJoinColumn
    private StatisticHeroesMax max;

    @OneToOne
    @PrimaryKeyJoinColumn
    private StatisticHeroesAvg avg;
}
