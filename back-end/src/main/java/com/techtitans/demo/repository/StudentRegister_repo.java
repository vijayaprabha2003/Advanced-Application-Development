package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.StudentRegister;

@Repository
public interface StudentRegister_repo extends JpaRepository<StudentRegister,Integer>{

}
