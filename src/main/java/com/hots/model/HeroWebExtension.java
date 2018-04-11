package com.hots.model;

import com.hots.model.dictionary.Difficulty;
import com.hots.model.dictionary.Franchise;
import com.hots.model.dictionary.ResourceType;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
@Table(name="herowebextension")
public class HeroWebExtension {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String imageurl;

    private String iconurl;

    private String portraiturl;

    private String detailsurl;
}
