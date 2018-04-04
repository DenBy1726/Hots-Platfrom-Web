package com.hots.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Matchuptable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Double winWith;
    private Double winAgainst;
    private Integer heroId1;
    private Integer heroId2;
}
