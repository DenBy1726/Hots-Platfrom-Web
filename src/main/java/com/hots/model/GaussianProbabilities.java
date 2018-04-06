package com.hots.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name="gaussianprobabilities")
public class GaussianProbabilities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private long id;

    @Column(name="gaussian_id")
    @JsonIgnore
    private Integer gaussianId;

    private Double value;
}
