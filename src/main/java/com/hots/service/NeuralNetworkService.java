package com.hots.service;

import Catalano.Neuro.ActivationNetwork;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hots.model.Network;
import com.hots.model.networkDTO.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Denis on 10.04.2018.
 */
@Service
public class NeuralNetworkService {
    @Autowired
    private NetworkService networkService;

    @Autowired
    private ObjectMapper objectMapper;


    @PostConstruct
    private void init() throws IOException, NoSuchFieldException, IllegalAccessException {
        List<ActivationNetwork> network = networkService
                .findLatest()
                .stream()
                .map(
                        x -> {
                            try {
                                return objectMapper.readValue(x.getData(), Root.class).getNetwork().original();
                            } catch (NoSuchFieldException | IllegalAccessException | IOException e) {
                                e.printStackTrace();
                            } finally {

                            }
                            return null;
                        }).collect(Collectors.toList());
    }

}
