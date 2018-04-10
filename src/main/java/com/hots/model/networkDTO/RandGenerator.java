
package com.hots.model.networkDTO;

import lombok.Data;

@Data
public class RandGenerator {

    private Double mean;
    private Double mode;
    private Integer length;
    private Double median;
    private Integer entropy;
    private Integer maximum;
    private Integer minimum;
    private Support support;
    private Double variance;
    private Quartiles quartiles;
    private Double standardDeviation;

}
