package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.BankDetails;

@Repository
public interface BankDetailsRepo extends JpaRepository<BankDetails, Integer>{

}
