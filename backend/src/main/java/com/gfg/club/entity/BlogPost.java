package com.gfg.club.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import java.time.LocalDate;

@Entity
@Table(name = "blog_posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    
    @Column(columnDefinition = "TEXT")
    private String content;
    
    private LocalDate date;
    
    @ElementCollection
    private List<String> tags;
    
    @Column(length = 1000)
    private String img;
    
    private int likes;
    private int comments;
}
