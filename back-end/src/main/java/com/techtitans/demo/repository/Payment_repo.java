package com.techtitans.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techtitans.demo.entity.Payment;

@Repository
public interface Payment_repo extends JpaRepository<Payment,Integer>{

}
