package com.hots.model.auth;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Denis on 13.04.2018.
 */
@Entity
@Table(name="users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private UserDetails details;

    private String githubId;
    private String facebookId;
    private String googleId;


    @ManyToMany(cascade = { CascadeType.REFRESH },fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_role",
            joinColumns = { @JoinColumn(name = "id") },
            inverseJoinColumns = { @JoinColumn(name = "role") }
    )
    private Set<Role> role;

}