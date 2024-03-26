package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.Courses;

@Repository
public interface Course_repo extends JpaRepository<Courses,Integer>{

}
