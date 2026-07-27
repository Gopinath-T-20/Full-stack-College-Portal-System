package com.college.collegeportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alumni")
@CrossOrigin(origins = "*")
public class AlumniController {

    @Autowired
    private AlumniRepository alumniRepository;

    @PostMapping("/register")
    public Alumni registerAlumni(@RequestBody Alumni alumni) {
        return alumniRepository.save(alumni);
    }

    @GetMapping
    public List<Alumni> getAllAlumni() {
        return alumniRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteAlumni(@PathVariable int id) {
        alumniRepository.deleteById(id);
        return "deleted";
    }

}