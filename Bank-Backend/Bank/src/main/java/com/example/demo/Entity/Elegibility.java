package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Elegibility")
public class Elegibility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Applicant_Name")
    private String ApplicantName;

    @Column(name = "Applicant_Middel_Name")
    private String ApplicantMiddelName;

    @Column(name = "Applicant_Last_Name")
    private String ApplicantLastName;

    @Column(name = "Pan")
    private String Pan;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplicantName() {
        return ApplicantName;
    }

    public void setApplicantName(String applicantName) {
        ApplicantName = applicantName;
    }

    public String getApplicantMiddelName() {
        return ApplicantMiddelName;
    }

    public void setApplicantMiddelName(String applicantMiddelName) {
        ApplicantMiddelName = applicantMiddelName;
    }

    public String getApplicantLastName() {
        return ApplicantLastName;
    }

    public void setApplicantLastName(String applicantLastName) {
        ApplicantLastName = applicantLastName;
    }

    public String getPan() {
        return Pan;
    }

    public void setPan(String pan) {
        Pan = pan;
    }

    @Override
    public String toString() {
        return "Elegibility [id=" + id + ", ApplicantName=" + ApplicantName + ", ApplicantMiddelName="
                + ApplicantMiddelName + ", ApplicantLastName=" + ApplicantLastName + ", Pan=" + Pan + "]";
    }
}
