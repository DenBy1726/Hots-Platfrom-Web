
package com.hots.model.networkDTO;


import Catalano.Neuro.SigmoidFunction;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ActivationFunction {

    @JsonProperty("Alpha")
    private Integer alpha;

    public SigmoidFunction original(){
        return new SigmoidFunction(alpha);
    }
}
