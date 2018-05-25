package com.hots.controller;

import com.hots.model.Dataset;
import com.hots.model.Network;
import com.hots.service.DatasetService;
import com.hots.service.NetworkService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/private/dataset")
public class DatasetController {

    @Autowired
    DatasetService datasetService;

    @Value("${HOTS_FORECASTER_STORAGE}")
    private String storagePath;

    @GetMapping(value="/{id}",produces="application/zip")
    ResponseEntity<InputStreamResource> findById(@PathVariable Long id, HttpServletResponse response)
            throws Exception {
        Dataset set = datasetService.findById(id);
        if (set == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        else {

            byte[] file = Files.readAllBytes(Paths.get(storagePath, set.getFilename()));
            response.addHeader("Content-Disposition",
                    "attachment; filename=\"" + set.getFilename() + "\"");
            return ResponseEntity
                    .ok()
                    .contentLength(file.length)
                    .body(new InputStreamResource
                            (new ByteArrayInputStream(file)));
        }
    }

    @GetMapping("/")
    List<Dataset> findAll() {
        return datasetService.findAll();
    }

}
