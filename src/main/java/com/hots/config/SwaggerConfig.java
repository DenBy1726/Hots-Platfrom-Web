package com.hots.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.AuthorizationCodeGrantBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;

import static org.springframework.security.oauth2.provider.token.AccessTokenConverter.CLIENT_ID;

/**
 * Created by Denis on 21.05.2018.
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Hots forecast API",
                "All api endpoints? that you can use to fetch hots forecast api data",
                "1",
                "Terms of service",
                new Contact("Denis Nalivko", "", "realdenby@gmail.com"),
                "MIT", "", Collections.emptyList());
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_12)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.ant("/api/v1/**"))
                .build()
                .apiInfo(apiInfo());
    }
}