package com.hots.model;

import com.hots.model.dictionary.Map;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Statistic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Integer matches;
    private Integer wins;
    private Integer mapId;
    private Integer heroId;
}
