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
@Table(name="trainingmeta")
public class TrainingMeta {

    private String name;

    private String clusterpath;

    private String alias;

    private String description;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private long id;
}
