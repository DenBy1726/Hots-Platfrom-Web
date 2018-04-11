package com.hots.service;

import com.hots.model.Hero;
import com.hots.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class HeroFullService {
    @Autowired
    Map<String,HeroAbstractService> heroAbstractServiceMap;

    public Map<String,Object> findbyId(Long id){
        return heroAbstractServiceMap
                .entrySet()
                .stream()
                .collect(Collectors.toMap(
                        e -> getKey(e.getKey()),
                        e -> e.getValue().findById(id)));
    }

    public Map<String,List<Object>> findAll(){
       return heroAbstractServiceMap
                .entrySet()
                .stream()
                .collect(Collectors.toMap(
                        e -> getKey(e.getKey()),
                        e -> e.getValue().findAll()));
    }

    protected String getKey(String key){
        String newKey = key.replace("hero","").replace("Service","");
        if(newKey.equals(""))
            return "Hero";
        else
            return newKey;
    }


}