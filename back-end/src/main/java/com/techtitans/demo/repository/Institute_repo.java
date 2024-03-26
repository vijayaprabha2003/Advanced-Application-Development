package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.Institute;

@Repository
public interface Institute_repo extends JpaRepository<Institute,Integer>{

}
