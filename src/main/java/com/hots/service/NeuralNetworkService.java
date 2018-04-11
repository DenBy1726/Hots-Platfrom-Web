package com.hots.service;

import Catalano.Neuro.ActivationNetwork;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hots.controller.HeroController;
import com.hots.controller.HeroFullController;
import com.hots.model.Network;
import com.hots.model.TrainingMeta;
import com.hots.model.dictionary.Dictionary;
import com.hots.model.networkDTO.Root;
import com.hots.repository.HeroRepository;
import javafx.util.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Created by Denis on 10.04.2018.
 */
@Service
public class NeuralNetworkService {
    @Autowired
    private NetworkService networkService;

    @Autowired
    HeroFullService heroFullService;

    @Autowired
    private ObjectMapper objectMapper;

    private List<Network> meta;
    private List<ActivationNetwork> network;
    private List<Function<Map<String, Object>, Integer>> clusterFunction;

    @PostConstruct
    private void init() throws IOException, NoSuchFieldException, IllegalAccessException {
        clusterFunction = new ArrayList<>();
        meta = networkService.findLatest();
        network = meta
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
        for (Network it : meta) {
            if (it.getMeta().getClusterpath().equals("default")) {
                clusterFunction.add(x -> getPropertyValue(x.get("Hero"), "subgroup"));
            } else {
                String[] paths = it.getMeta().getClusterpath().split("\\.");
                String extension = paths[0];
                String fieldPath = paths[1];
                clusterFunction.add(x -> getPropertyValue(x.get(extension), fieldPath.toLowerCase()));
            }
        }
    }

    public List<Pair<Network, Double>> compute(Integer[] hero) {
        List<Pair<Network, Double>> result = new ArrayList<>();
        HashMap<String, Object>[] fulls =
                Arrays.stream(hero).map(x -> heroFullService.findbyId(new Long(x))).toArray(HashMap[]::new);
        for (int i = 0; i < network.size(); i++) {
            if (Arrays.equals(Arrays.copyOfRange(hero, 0, 5), Arrays.copyOfRange(hero, 5, 10))) {
                result.add(new Pair<>(meta.get(i), 0.5));
            } else {
                final int id = i;
                double[] input = new double[network.get(i).getInputsCount()];
                Integer[] clusters = new Integer[hero.length];

                for (int j = 0; j < hero.length; j++) {
                    clusters[j] = clusterFunction.get(id).apply(fulls[j]);
                }

                for (int j = 0; j < 5; j++) {
                    input[clusters[j]]++;
                }

                for (int j = 5; j < 10; j++) {
                    input[(input.length / 2) + clusters[i]]++;
                }
                result.add(new Pair<>(meta.get(i), network.get(i).Compute(input)[0]));
            }
        }
        return result;
    }

    @SuppressWarnings("unchecked")
    private Integer getPropertyValue(Object obj, String string) {
        Object ret = obj;
        String[] parts = string.split("\\.");

        for (String field : parts) {
            try {
                ret = find(ret, field);
            } catch (NoSuchFieldException | SecurityException | IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        if (ret.getClass() == Integer.class) {
            return (Integer) ret;
        } else {
            try {
                return ((Long) find(ret, "id")).intValue() - 1;
            } catch (NoSuchFieldException | SecurityException | IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
    }

    @SuppressWarnings("unchecked")
    private Object find(Object ret, String next) throws NoSuchFieldException, IllegalAccessException {
        Class<?> clazz = ret.getClass();
        Field f;
        if (clazz.getDeclaredFields().length > 0)
            f = clazz.getDeclaredField(next);
        else
            f = clazz.getSuperclass().getDeclaredField(next);
        f.setAccessible(true);
        return f.get(ret);
    }
}
