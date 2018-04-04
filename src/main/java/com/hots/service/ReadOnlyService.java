package com.hots.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
public abstract class ReadOnlyService<T,Repository extends JpaRepository<T,Long>> {
    @Autowired
    protected Repository repository;

    public T findById(Long id){
        return repository.findOne(id);
    }
    public List<T> findAll(){
        return repository.findAll();
    }
}
