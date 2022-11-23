package com.haresh.fastfly.controller;

import com.haresh.fastfly.model.Flight;
import com.haresh.fastfly.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flights")
@CrossOrigin
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;

    @PostMapping("/add")
    Flight newFlight(@RequestBody Flight newFlight){
        return flightRepository.save(newFlight);
    }

    @GetMapping
    List<Flight> getAllFlights(){
        return  flightRepository.findAll();
    }
}
