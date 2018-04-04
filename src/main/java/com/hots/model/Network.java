package com.hots.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Network {
    private Long datasetId;
    private Long stateId;
    private Long metaId;
    private String data;
    private Boolean isbest;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

}
