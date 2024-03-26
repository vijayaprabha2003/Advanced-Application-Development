package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.Admission;


@Repository
public interface Admission_repo extends JpaRepository<Admission,Integer>{

}
