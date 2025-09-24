package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HolaMundoController {

    @GetMapping("/saludo")
    public Map<String, String> helloWorld() {
        return Map.of("helloWorld", "Hola Mundo");
    }
}
