package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.Student;

@Repository
public interface Student_repo extends JpaRepository<Student,Integer>{

}
