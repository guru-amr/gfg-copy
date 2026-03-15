package com.gfg.club.repository;

import com.gfg.club.entity.ClubRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRegistrationRepository extends JpaRepository<ClubRegistration, Long> {
}
