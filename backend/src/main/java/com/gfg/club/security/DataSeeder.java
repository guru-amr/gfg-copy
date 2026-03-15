package com.gfg.club.security;

import com.gfg.club.entity.*;
import com.gfg.club.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    ResourceRepository resourceRepository;

    @Autowired
    BlogPostRepository blogPostRepository;

    @Autowired
    LeaderboardRepository leaderboardRepository;

    @Override
    public void run(String... args) throws Exception {
        if (eventRepository.count() == 0) seedEvents();
        if (resourceRepository.count() == 0) seedResources();
        if (blogPostRepository.count() == 0) seedBlogs();
        if (leaderboardRepository.count() == 0) seedLeaderboard();
    }

    private void seedEvents() {
        eventRepository.saveAll(Arrays.asList(
            Event.builder().title("Spring Hackathon 2026").date("Mar 28-29, 2026").time("9:00 AM").tags(Arrays.asList("Hackathon", "DSA")).seats(42).totalSeats(200).status("upcoming").type("Contests").img("https://images.unsplash.com/photo-1565687981296-535f09db714e").description("48-hour coding marathon.").speakers(Arrays.asList("Prof. Sharma")).location("Main Auditorium").build(),
            Event.builder().title("DSA Bootcamp Week").date("Apr 5-11, 2026").time("5:00 PM").tags(Arrays.asList("Workshop", "DSA")).seats(15).totalSeats(80).status("upcoming").type("Workshops").img("https://images.unsplash.com/photo-1634464660153-468d44306ac4").description("7-day intensive bootcamp.").location("Lab 301").build()
        ));
    }

    private void seedResources() {
        resourceRepository.saveAll(Arrays.asList(
            Resource.builder().title("DSA Roadmaps").category("Algorithms").description("Complete DSA roadmap for interviews.").link("#").type("pdf").difficulty("Intermediate").build(),
            Resource.builder().title("System Design 101").category("Architecture").description("Learn the basics of system design.").link("#").type("video").difficulty("Advanced").build()
        ));
    }

    private void seedBlogs() {
        blogPostRepository.saveAll(Arrays.asList(
            BlogPost.builder().title("Cracking Google Interview").author("Arjun Mehta").content("My experience with Google's SDE interview process...").date(LocalDate.now()).tags(Arrays.asList("Interviews", "SDE")).img("https://images.unsplash.com/photo-1565687981296-535f09db714e").likes(120).comments(15).build()
        ));
    }

    private void seedLeaderboard() {
        leaderboardRepository.saveAll(Arrays.asList(
            LeaderboardEntry.builder().rank(1).name("Aarav Patel").year("3rd Year").solved(124).events(5).streak(12).avatar("AP").build(),
            LeaderboardEntry.builder().rank(2).name("Priya Sharma").year("4th Year").solved(118).events(7).streak(10).avatar("PS").build(),
            LeaderboardEntry.builder().rank(3).name("Rohan Gupta").year("3rd Year").solved(112).events(4).streak(9).avatar("RG").build(),
            LeaderboardEntry.builder().rank(4).name("Sneha Verma").year("2nd Year").solved(97).events(3).streak(8).avatar("SV").build(),
            LeaderboardEntry.builder().rank(5).name("Karthik Iyer").year("3rd Year").solved(92).events(6).streak(7).avatar("KI").build(),
            LeaderboardEntry.builder().rank(6).name("Ananya Singh").year("2nd Year").solved(88).events(2).streak(6).avatar("AS").build(),
            LeaderboardEntry.builder().rank(7).name("Vikram Reddy").year("4th Year").solved(81).events(7).streak(5).avatar("VR").build(),
            LeaderboardEntry.builder().rank(8).name("Meera Nair").year("1st Year").solved(72).events(1).streak(4).avatar("MN").build(),
            LeaderboardEntry.builder().rank(9).name("Arjun Mehta").year("2nd Year").solved(68).events(2).streak(3).avatar("AM").build(),
            LeaderboardEntry.builder().rank(10).name("Divya Kapoor").year("3rd Year").solved(61).events(4).streak(2).avatar("DK").build()
        ));
    }
}
