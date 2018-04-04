package com.hots.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Dataset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String filename;
    private Date date;
}
