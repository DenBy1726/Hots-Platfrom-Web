package com.hots.model;

import com.hots.model.Gaussianprobabilities;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
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
  //  private List<Gaussianprobabilities> probability;
    private Double loglikelihoods;

}
