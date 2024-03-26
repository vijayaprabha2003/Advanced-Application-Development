package com.techtitans.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int student_id;
    private String student_name;
    private String father_name;
    private String mother_name;
    private String gender;
    private int age;
    private String nationality;
    private String address;
    private String mobile_no;
    private int sslc;
    private int hsc;
    private int diplomo;
    private String eligible;


}
