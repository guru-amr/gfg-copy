package com.gfg.club.controller;

import com.gfg.club.entity.ClubRegistration;
import com.gfg.club.repository.ClubRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/club")
public class RegistrationController {

    @Autowired
    ClubRegistrationRepository registrationRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerForClub(@RequestBody ClubRegistration registration) {
        registrationRepository.save(registration);
        
        Map<String, String> response = new HashMap<>();
        response.put("message", "Application submitted successfully!");
        return ResponseEntity.ok(response);
    }
}
