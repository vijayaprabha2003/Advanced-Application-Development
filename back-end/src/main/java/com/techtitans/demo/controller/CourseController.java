package com.techtitans.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techtitans.demo.entity.Courses;
import com.techtitans.demo.repository.Course_repo;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController {
    @Autowired

    private Course_repo cou_repo ;

    @SuppressWarnings("null")
    @PostMapping("/add")
    public Courses add(final @RequestBody Courses cou)
    {
        return cou_repo.save(cou) ;
    }

    @GetMapping("/get")
    public List<Courses> getAllAdmissions()
    {
        return cou_repo.findAll() ;
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id)
    {
        cou_repo.deleteById(id);
        return "Deleted Successfully" ;
    }


}