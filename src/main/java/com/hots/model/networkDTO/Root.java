
package com.hots.model.networkDTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Root {
    @JsonProperty("Meta")
    private Meta meta;
    @JsonProperty("Network")
    private Network network;
}
