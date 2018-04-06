package com.hots.service;

import com.hots.model.Dataset;
import com.hots.model.Network;
import com.hots.repository.DatasetRepository;
import com.hots.repository.NetworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class DatasetService {

    @Autowired
    DatasetRepository datasetRepository;

    public List<Dataset> findAll() {
        return datasetRepository.findAll();
    }

    public Dataset findById(long id) {
        return datasetRepository.findById(id);
    }

}