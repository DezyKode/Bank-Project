package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.AddEmployee;

@Repository
public interface AddEmployeeRepo extends JpaRepository<AddEmployee, Integer> {

}
