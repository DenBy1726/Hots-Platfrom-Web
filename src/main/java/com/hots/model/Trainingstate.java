package com.hots.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Trainingstate {
    private Double error;
    private Integer iteration;
    private Double validerror;
    private Double percent;
    private Double validpercent;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}
