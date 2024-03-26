package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.StudentLogin;

@Repository
public interface StudentLogin_repo extends JpaRepository<StudentLogin,Integer>{

}
