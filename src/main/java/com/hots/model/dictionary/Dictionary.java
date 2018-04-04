package com.hots.model.dictionary;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 04.04.2018.
 */

@MappedSuperclass
@Data
public abstract class Dictionary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
}
