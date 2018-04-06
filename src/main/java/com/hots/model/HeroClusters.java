package com.hots.model;

import com.hots.model.Gaussian;
import com.hots.model.dictionary.HeroSubgroup;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name="heroclusters")
public class HeroClusters {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name="subgroupcluster")
    private HeroSubgroup subgroupcluster;

    private Integer cluster;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Gaussian gaussian;
 }
