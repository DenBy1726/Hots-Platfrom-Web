package com.hots.service;

import com.hots.model.Dataset;
import com.hots.model.Hero;
import com.hots.model.Network;
import com.hots.repository.HeroRepository;
import com.hots.repository.NetworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Denis on 04.04.2018.
 */
@Service
public class NetworkService {

    @Autowired
    NetworkRepository networkRepository;

    public List<Network> findAll() {
        return networkRepository.findAll();
    }

    public Network findById(long id) {
        return networkRepository.findById(id);
    }

    public List<Network> findByDatasetId(long id) {
        return networkRepository.findByDataset(id);
    }

    public List<Network> findLatest() {
        List<Network> networks = networkRepository.findAll();
        Date maxDate = networks.stream()
                .map(Network::getDataset)
                .map(Dataset::getDate)
                .max(Date::compareTo)
                .get();
        List<Dataset> set = networks.stream()
                .map(Network::getDataset)
                .filter(x -> x.getDate().equals(maxDate))
                .collect(Collectors.toList());
        if (set == null || set.size() == 0)
            return null;
        long latestId = set.get(0).getId();
        return networks.stream()
                .filter(x -> x.getDataset().getId() == latestId)
                .collect(Collectors.toList());

    }

    public Network findLatestBest(){
        return findLatest()
                .stream()
                .filter(x->x.getIsbest().equals(true))
                .collect(Collectors.toList()).get(0);
    }
}