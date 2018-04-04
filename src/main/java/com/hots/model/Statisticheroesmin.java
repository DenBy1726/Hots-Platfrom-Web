package com.hots.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Statisticheroesmin {
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
    private Integer replayid;
    private Integer heroid;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}
