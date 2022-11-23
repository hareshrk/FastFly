package com.haresh.fastfly.controller;

import com.haresh.fastfly.model.User;
import com.haresh.fastfly.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    User newUser(@RequestBody User newUser){
    return userRepository.save(newUser);
    }

    @GetMapping
    List<User> getAllUsers(){
        return  userRepository.findAll();
    }
}
