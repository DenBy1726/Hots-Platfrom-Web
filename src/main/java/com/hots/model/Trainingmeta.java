package com.hots.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Trainingmeta {
    private String name;
    private String clusterpath;
    private String alias;
    private String description;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}
