package com.hots.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hots.model.dictionary.Map;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Statistic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int id;

    private Integer matches;

    private Integer wins;

    @ManyToOne
    @JoinColumn(name="map_id")
    private Map map;

    @ManyToOne
    @JoinColumn(name="hero_id")
    private Hero hero;
}
