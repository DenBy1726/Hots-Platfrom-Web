package com.hots.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by Denis on 04.04.2018.
 */
@RestController
@RequestMapping("/api/v1/private/app")
public class AppController {

    @Value("${HOTS_FORECASTER_STORAGE}")
    private String storagePath;

    @GetMapping(produces="application/zip")
    ResponseEntity<InputStreamResource> findById(HttpServletResponse response)
            throws Exception {
        byte[] file = Files.readAllBytes(Paths.get(storagePath, "app.rar"));
        response.addHeader("Content-Disposition",
                "attachment; filename=\"" + "app.rar" + "\"");
        return ResponseEntity
                .ok()
                .contentLength(file.length)
                .body(new InputStreamResource
                        (new ByteArrayInputStream(file)));
    }

}
