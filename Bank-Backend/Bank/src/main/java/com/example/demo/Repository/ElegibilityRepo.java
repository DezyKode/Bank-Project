package com.example.demo.Repository;

import com.example.demo.Entity.AddEmployee;
import com.example.demo.Entity.Elegibility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElegibilityRepo extends JpaRepository<Elegibility, Integer> {

}
