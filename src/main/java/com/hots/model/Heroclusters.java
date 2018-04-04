package com.hots.model;

import com.hots.model.Gaussian;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Heroclusters {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer subgroupcluster;
    private Integer cluster;
    //private Gaussian gaussian;
 }
