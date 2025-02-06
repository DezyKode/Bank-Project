package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    private int empId;

    @Column(name="employee_name")
    private String Name;

    @Column(name="employee_email")
    private String email;

    @Column(name="mobile_number")
    private long mobile;

    @Column(name="employee_gender")
    private String Gender;

    @Column(name="employee_role")
    private String Role;

    @Column(name="password")
    private String Password;

    @Column(name="confirm_password")
    private String Confirm_password;

    @Column(name="upload_photo")	
    private String photoUpload; 

    @Column(name="temporary_address")
    private String tAddress1;
    
    @Column(name = "temporary_Address2")
    private String tAddress2;
    
    @Column(name = "temporary_State")
    private String tState;
    
    @Column(name = "temporary_City")
    private String tCity;
    
    @Column(name = "temporary_PinCode")
    private String tPincode;
    
    @Column(name="permanent_Address")
    private String pAddress1;
    
    @Column(name = "permanent_Address2")
    private String pAddress2;
    
    @Column(name = "Permanant_State")
    private String pState;
    
    @Column(name = "Permanant_City")
    private String pCity;
    
    @Column(name = "Permanant_Pincode")
    private String pPincode;
    
    @Column(name = "status")
    private String Status = "ACTIVE";

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
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

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getConfirm_password() {
		return Confirm_password;
	}

	public void setConfirm_password(String confirm_password) {
		Confirm_password = confirm_password;
	}

	public String getPhotoUpload() {
		return photoUpload;
	}

	public void setPhotoUpload(String photoUpload) {
		this.photoUpload = photoUpload;
	}

	public String gettAddress1() {
		return tAddress1;
	}

	public void settAddress1(String tAddress1) {
		this.tAddress1 = tAddress1;
	}

	public String gettAddress2() {
		return tAddress2;
	}

	public void settAddress2(String tAddress2) {
		this.tAddress2 = tAddress2;
	}

	public String gettState() {
		return tState;
	}

	public void settState(String tState) {
		this.tState = tState;
	}

	public String gettCity() {
		return tCity;
	}

	public void settCity(String tCity) {
		this.tCity = tCity;
	}

	public String gettPincode() {
		return tPincode;
	}

	public void settPincode(String tPincode) {
		this.tPincode = tPincode;
	}

	public String getpAddress1() {
		return pAddress1;
	}

	public void setpAddress1(String pAddress1) {
		this.pAddress1 = pAddress1;
	}

	public String getpAddress2() {
		return pAddress2;
	}

	public void setpAddress2(String pAddress2) {
		this.pAddress2 = pAddress2;
	}

	public String getpState() {
		return pState;
	}

	public void setpState(String pState) {
		this.pState = pState;
	}

	public String getpCity() {
		return pCity;
	}

	public void setpCity(String pCity) {
		this.pCity = pCity;
	}

	public String getpPincode() {
		return pPincode;
	}

	public void setpPincode(String pPincode) {
		this.pPincode = pPincode;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	@Override
	public String toString() {
		return "AddEmployee [id=" + id + ", empId=" + empId + ", Name=" + Name + ", email=" + email + ", mobile="
				+ mobile + ", Gender=" + Gender + ", Role=" + Role + ", Password=" + Password + ", Confirm_password="
				+ Confirm_password + ", photoUpload=" + photoUpload + ", tAddress1=" + tAddress1 + ", tAddress2="
				+ tAddress2 + ", tState=" + tState + ", tCity=" + tCity + ", tPincode=" + tPincode + ", pAddress1="
				+ pAddress1 + ", pAddress2=" + pAddress2 + ", pState=" + pState + ", pCity=" + pCity + ", pPincode="
				+ pPincode + ", Status=" + Status + "]";
	}
}
