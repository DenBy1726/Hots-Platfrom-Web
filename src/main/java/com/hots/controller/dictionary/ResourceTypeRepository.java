package com.hots.controller.dictionary;

import com.hots.model.dictionary.Map;
import com.hots.model.dictionary.ResourceType;
import com.hots.service.dictionary.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/resourcetype")
public class ResourceTypeRepository {
    @Autowired
    ResourceTypeRepository resourceType;

    @GetMapping("/{id}")
    ResourceType findById(@PathVariable Long id){
        return resourceType.findById(id);
    }

    @GetMapping("/")
    List<ResourceType> findAll(){
        return resourceType.findAll();
    }
}
