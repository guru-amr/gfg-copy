package com.gfg.club.controller;

import com.gfg.club.entity.BlogPost;
import com.gfg.club.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/blogs")
public class BlogController {
    @Autowired
    BlogPostRepository blogPostRepository;

    @GetMapping
    public List<BlogPost> getAllBlogs() {
        return blogPostRepository.findAll();
    }

    @PostMapping
    public BlogPost createBlog(@RequestBody BlogPost blog) {
        return blogPostRepository.save(blog);
    }
}
