package com.hots.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Network {

    @ManyToOne
    @JoinColumn(name="dataset_id")
    private Dataset dataset;

    @ManyToOne
    @JoinColumn(name="state_id")
    private TrainingState state;

    @ManyToOne
    @JoinColumn(name="meta_id")
    private TrainingMeta meta;

    @JsonIgnore
    private String data;

    private Boolean isbest;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

}
