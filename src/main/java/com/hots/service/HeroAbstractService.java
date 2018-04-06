package com.hots.service;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Denis on 04.04.2018.
 */
public abstract class HeroAbstractService<T,Repository extends JpaRepository<T,Long>>
        extends ReadOnlyService<T,Repository>{
}
