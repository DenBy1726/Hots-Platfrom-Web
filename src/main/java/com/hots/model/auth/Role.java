package com.hots.model.auth;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 13.04.2018.
 */
@Entity
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
}
