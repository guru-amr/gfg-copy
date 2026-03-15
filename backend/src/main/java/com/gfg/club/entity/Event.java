package com.gfg.club.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Table(name = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String date;
    private String time;
    
    @ElementCollection
    private List<String> tags;
    
    private int seats;
    private int totalSeats;
    private String status; // upcoming, past
    private String type; // Workshops, Contests, etc.
    
    @Column(length = 1000)
    private String img;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @ElementCollection
    private List<String> speakers;
    
    private String location;
}
