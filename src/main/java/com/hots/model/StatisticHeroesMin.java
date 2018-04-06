package com.hots.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name="statisticheroesmin")
public class StatisticHeroesMin {

    private Double winrate;

    private Double killpersec;

    private Double assistpersec;

    private Double deathpersec;

    private Double dps;

    private Double hps;

    private Double sdps;

    private Double damagetakenpersec;

    private Double exppersec;

    private Double camptakenpersec;

    private Double sec;

    @Transient
    @JsonIgnore
    private Integer replayid;

    @Transient
    @JsonIgnore
    private Integer heroid;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private long id;
}
