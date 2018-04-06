package com.hots.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Gaussian {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Integer cluster;

    @OneToMany
    @JoinColumn(name="gaussian_id")
    private List<GaussianProbabilities> probability;

    private Double loglikelihoods;

}
