package com.hots.controller.dictionary;

import com.hots.model.dictionary.Dictionary;
import com.hots.service.dictionary.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/public/dictionary")
public class DictionaryController {

    @Autowired
    Map<String,DictionaryService> dictionaryServiceMap;

    @GetMapping("/")
    Map<String,List<Dictionary>> findAll(){
        Map<String, List<Dictionary>> dictionaries =
                dictionaryServiceMap
                        .entrySet()
                        .stream()
                        .collect(Collectors.toMap(
                                e -> e.getKey().replace("Service", ""),
                                e -> e.getValue().findAll()));
        return dictionaries;
    }
}


