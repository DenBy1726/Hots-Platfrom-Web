package com.hots.model;

import com.hots.model.dictionary.ResourceType;
import com.hots.model.dictionary.Difficulty;
import com.hots.model.dictionary.Franchise;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by Denis on 04.04.2018.
 */
@Data
@Entity
public class Herodetails {
    private Date date;
    private Integer price;
 //   private Franchise franchise;
    private String info;
    private String lore;
 //   private Difficulty difficulty;
    private Boolean melee;
    private Integer health;
    private Double healthregen;
    private Integer resource;
  //  private ResourceType resourcetype;
    private Integer spellarmor;
    private Integer physicalarmor;
    private Double attackspeed;
    private Double attackrange;
    private Integer attackdamage;
    private String imageurl;
    private String iconurl;
    private String detailsurl;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;

}
