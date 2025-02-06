package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BankDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "Bank_Name")
	private String bankName;
	
	private String payout;
	
	private String photoUpload;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getPayout() {
		return payout;
	}

	public void setPayout(String payout) {
		this.payout = payout;
	}

	public String getPhotoUpload() {
		return photoUpload;
	}

	public void setPhotoUpload(String photoUpload) {
		this.photoUpload = photoUpload;
	}

	@Override
	public String toString() {
		return "BankDetails [id=" + id + ", bankName=" + bankName + ", payout=" + payout + ", photoUpload="
				+ photoUpload + "]";
	}
}
