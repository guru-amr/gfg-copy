package com.gfg.club.repository;

import com.gfg.club.entity.LeaderboardEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaderboardRepository extends JpaRepository<LeaderboardEntry, Long> {
}
