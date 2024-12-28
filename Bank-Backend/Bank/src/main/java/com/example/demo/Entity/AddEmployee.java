package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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

    @Column(name="password")
    private String Passward;

    @Column(name="confirm_password")
    private String Confirm_Passward;

    @Column(name="upload_photo")
    private String Upload_Photo; 

    @Column(name="temporary_address")
    private String Temporary_address;

    @Column(name="permanent_address")
    private String Permanent_address;

    // Getters and Setters

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

    public String getPassward() {
        return Passward;
    }

    public void setPassward(String passward) {
        Passward = passward;
    }

    public String getConfirm_Passward() {
        return Confirm_Passward;
    }

    public void setConfirm_Passward(String confirm_Passward) {
        Confirm_Passward = confirm_Passward;
    }

    public String getUpload_Photo() {
        return Upload_Photo;
    }

    public void setUpload_Photo(String upload_Photo) {
        Upload_Photo = upload_Photo;
    }

    public String getTemporary_address() {
        return Temporary_address;
    }

    public void setTemporary_address(String temporary_address) {
        Temporary_address = temporary_address;
    }

    public String getPermanent_address() {
        return Permanent_address;
    }

    public void setPermanent_address(String permanent_address) {
        Permanent_address = permanent_address;
    }

    @Override
    public String toString() {
        return "AddEmployee [id=" + id + ", Employee_Id=" + Employee_Id + ", Name=" + Name + ", Email_ID=" + Email_ID
                + ", Mobile_No=" + Mobile_No + ", Gender=" + Gender + ", Role=" + Role + ", Passward=" + Passward
                + ", Confirm_Passward=" + Confirm_Passward + ", Upload_Photo=" + Upload_Photo + ", Temporary_address="
                + Temporary_address + ", Permanent_address=" + Permanent_address + "]";
    }
}
