package com.hots.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name = "matchuptable")
public class Matchup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int id;

    private Double winWith;

    private Double winAgainst;

    @Column(name="hero_id1")
    @JsonIgnore
    private long first;

    @Column(name="hero_id2")
    @JsonIgnore
    private long second;
}
