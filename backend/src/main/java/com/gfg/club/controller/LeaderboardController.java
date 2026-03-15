package com.gfg.club.controller;

import com.gfg.club.entity.LeaderboardEntry;
import com.gfg.club.repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/leaderboard")
public class LeaderboardController {
    @Autowired
    LeaderboardRepository leaderboardRepository;

    @GetMapping
    public List<LeaderboardEntry> getLeaderboard() {
        return leaderboardRepository.findAll();
    }

    @PostMapping
    public LeaderboardEntry addEntry(@RequestBody LeaderboardEntry entry) {
        return leaderboardRepository.save(entry);
    }
}
