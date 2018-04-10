
package com.hots.model.networkDTO;

import Catalano.Neuro.ActivationLayer;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Data
public class Layer {

    @JsonProperty("Output")
    private Double[] output = null;
    @JsonProperty("Neurons")
    private Neuron[] neurons = null;
    @JsonProperty("InputsCount")
    private Integer inputsCount;

    public ActivationLayer original() throws NoSuchFieldException, IllegalAccessException {
        ActivationLayer layer = new ActivationLayer(this.neurons.length,
                this.inputsCount, null);
        Class clazz = layer.getClass();

        Field neuronsField =
                clazz.getSuperclass().getDeclaredField("neurons");
        neuronsField.setAccessible(true);
        Object values = Array.newInstance(neuronsField.getType().getComponentType(), neurons.length);
        for (int i = 0; i < neurons.length; i++) {
            Array.set(values, i, neurons[i].original());
        }
        neuronsField.set(layer, values);

        Field outputField =
                clazz.getSuperclass().getDeclaredField("output");
        outputField.setAccessible(true);
        values = Array.newInstance(outputField.getType().getComponentType(), output.length);
        for (int i = 0; i < output.length; i++) {
            Array.set(values, i, output[i]);
        }
        outputField.set(layer, values);

        return layer;
    }

}
