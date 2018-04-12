package com.hots.controller;

import com.hots.model.Network;
import com.hots.service.NetworkService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/private/network")
public class NetworkController {

    @Autowired
    NetworkService networkService;

    @GetMapping("/{id}")
    ResponseEntity<InputStreamResource> findById(@PathVariable Long id, HttpServletResponse response)
            throws Exception {
        Network net = networkService.findById(id);
        if (net == null)
            throw new NotFoundException("");
        else{
            byte[] file = net.getData().getBytes();
            return ResponseEntity
                    .ok()
                    .contentLength(file.length)
                    .contentType(
                            MediaType.APPLICATION_JSON)
                    .body(new InputStreamResource
                            (new ByteArrayInputStream(file)));
        }
    }

    @GetMapping("/")
    List<Network> findAll(){
        return networkService.findAll();
    }

    @GetMapping("/latest")
    List<Network> findLatest(){
        return networkService.findLatest();
    }

    @GetMapping("/best")
    Network findBest(){
        return networkService.findLatestBest();
    }

    @GetMapping("/dataset/{id}")
    List<Network> findByDatasetId(@PathVariable Long id){
        return networkService.findByDatasetId(id);
    }
}
