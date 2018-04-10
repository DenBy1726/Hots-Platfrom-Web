
package com.hots.model.networkDTO;

import Catalano.Neuro.ActivationNetwork;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class Network {

    @JsonProperty("Layers")
    private Layer[] layers = null;
    @JsonProperty("Output")
    private Double[] output = null;
    @JsonProperty("InputsCount")
    private Integer inputsCount;

    public ActivationNetwork original() throws NoSuchFieldException, IllegalAccessException {
        ActivationNetwork network = new ActivationNetwork(null, this.inputsCount, new int[1]);
        Class clazz = network.getClass();

        Field layersField =
                clazz.getSuperclass().getDeclaredField("layers");
        layersField.setAccessible(true);
        Object values = Array.newInstance(layersField.getType().getComponentType(), layers.length);
        for (int i = 0; i < layers.length; i++) {
            Array.set(values, i, layers[i].original());
        }
        layersField.set(network, values);

        Field outputField =
                clazz.getSuperclass().getDeclaredField("output");
        outputField.setAccessible(true);
        values = Array.newInstance(outputField.getType().getComponentType(), output.length);
        for (int i = 0; i < output.length; i++) {
            Array.set(values, i, output[i]);
        }
        outputField.set(network, values);

        Field layersCount =
                clazz.getSuperclass().getDeclaredField("layersCount");
        layersCount.setAccessible(true);
        layersCount.set(network, this.layers.length);
        return network;
    }

}
