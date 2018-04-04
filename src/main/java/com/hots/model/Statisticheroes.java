package com.hots.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Statisticheroes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer idMin;
    private Integer idMax;
    private Integer idAvg;
}
