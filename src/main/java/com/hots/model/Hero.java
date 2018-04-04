package com.hots.model;

import com.hots.model.dictionary.HeroGroup;
import com.hots.model.dictionary.HeroSubgroup;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Hero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="_group")
    private HeroGroup group;

    @ManyToOne
    @JoinColumn(name="subgroup")
    private HeroSubgroup subgroup;
}
