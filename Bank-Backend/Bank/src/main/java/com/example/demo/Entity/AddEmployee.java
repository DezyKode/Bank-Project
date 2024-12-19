package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "employee_details")
public class AddEmployee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="employee_id")
	private int Employee_Id;
	
	@Column(name="employee_name")
	private String Name;
	
	@Column(name="employee_email")
	private String Email_ID;
	
	@Column(name="mobile_number")
	private long Mobile_No;
	
	@Column(name="employee_gender")
	private String Gender;
	
	@Column(name="employee_role")
	private String Role;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEmployee_Id() {
		return Employee_Id;
	}

	public void setEmployee_Id(int employee_Id) {
		Employee_Id = employee_Id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail_ID() {
		return Email_ID;
	}

	public void setEmail_ID(String email_ID) {
		Email_ID = email_ID;
	}

	public long getMobile_No() {
		return Mobile_No;
	}

	public void setMobile_No(long mobile_No) {
		Mobile_No = mobile_No;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	@Override
	public String toString() {
		return "AddEmployee [id=" + id + ", Employee_Id=" + Employee_Id + ", Name=" + Name + ", Email_ID=" + Email_ID
				+ ", Mobile_No=" + Mobile_No + ", Gender=" + Gender + ", Role=" + Role + "]";
	}
	
	
	
	
	
}
