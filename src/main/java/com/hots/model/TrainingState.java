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
@Table(name="trainingstate")
public class TrainingState {

    private Double error;

    private Integer iteration;

    private Double validerror;

    private Double percent;

    private Double validpercent;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private long id;
}
