
package com.hots.model.networkDTO;

import Catalano.Neuro.ActivationNeuron;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.lang.reflect.Field;
import java.util.List;

@Data
public class Neuron {

    @JsonProperty("Output")
    private Double output;
    @JsonProperty("Weights")
    private Double[] weights = null;
    @JsonProperty("Threshold")
    private Double threshold;
    @JsonProperty("InputsCount")
    private Integer inputsCount;
    @JsonProperty("RandGenerator")
    private RandGenerator randGenerator;
    @JsonProperty("ActivationFunction")
    private ActivationFunction activationFunction;

    public ActivationNeuron original() throws NoSuchFieldException, IllegalAccessException {
        ActivationNeuron neuron = new ActivationNeuron(this.inputsCount, null);
        Class clazz = neuron.getClass();

        neuron.setThreshold(this.threshold);
        neuron.setActivationFunction( this.activationFunction.original());

        Field output = clazz.getSuperclass().getDeclaredField("output");
        output.setAccessible(true);
        output.set(neuron, this.output);

        for(int i=0;i<weights.length;i++){
            neuron.setWeight(i,weights[i]);
        }

        return neuron;
    }
}
