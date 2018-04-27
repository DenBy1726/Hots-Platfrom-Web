package com.hots.model.auth;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Denis on 13.04.2018.
 */
@Data
@Entity
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String principal;
    private String image;
}
