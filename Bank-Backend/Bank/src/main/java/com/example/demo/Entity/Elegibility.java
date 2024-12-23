package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Elegibility")
public class Elegibility {

	// Keep this for database-level generation (e.g., for relational integrity)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Type_Of_Loan")
    private String typeOfLoan;

    @Column(name = "First_Name")
    private String firstName;

    @Column(name = "Middle_Name")
    private String middleName;

    @Column(name = "Last_Name")
    private String lastName;
    
    @Column(name = "Date_Of_Birth")
    private String dateOfBirth;
    
    @Column(name = "Email")
    private String email;
    
    @Column(name = "Mobile_Number")
    private String mobileNo;
    
    @Column(name = "Pan_No")
    private String panNo;
    
    @Column(name = "Employment_Type")
    private String employmentType;
    
    @Column(name = "Employer_Type")
    private String employerType;
    
    @Column(name = "Monthly_Gross_Salary")
    private String monthlyGrossSalary;
    
    @Column(name = "Monthly_Net_Salary")
    private String monthlyNetSalary;
    
    @Column(name = "Average_Bonus_Of_Last_Three_Years ")
    private String averageBonusOfLastThreeYears;
    
    @Column(name = "Average_Monthly_Incentive_Of_Last_6_Month")
    private String averageMonthlyIncentiveOfLast6Month;
    
    @Column(name = "Rent_Income")
    private String rentIncome;
    
    @Column(name = "Future_Rent_Income")
    private String futureRentIncome;
    
    @Column(name = "Loan_EMI(Obligation)")
    private String loanEMI;
    
    @Column(name = "Pension")
    private String pension;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTypeOfLoan() {
		return typeOfLoan;
	}

	public void setTypeOfLoan(String typeOfLoan) {
		this.typeOfLoan = typeOfLoan;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPanNo() {
		return panNo;
	}

	public void setPanNo(String panNo) {
		this.panNo = panNo;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public String getEmployerType() {
		return employerType;
	}

	public void setEmployerType(String employerType) {
		this.employerType = employerType;
	}

	public String getMonthlyGrossSalary() {
		return monthlyGrossSalary;
	}

	public void setMonthlyGrossSalary(String monthlyGrossSalary) {
		this.monthlyGrossSalary = monthlyGrossSalary;
	}

	public String getMonthlyNetSalary() {
		return monthlyNetSalary;
	}

	public void setMonthlyNetSalary(String monthlyNetSalary) {
		this.monthlyNetSalary = monthlyNetSalary;
	}

	public String getAverageBonusOfLastThreeYears() {
		return averageBonusOfLastThreeYears;
	}

	public void setAverageBonusOfLastThreeYears(String averageBonusOfLastThreeYears) {
		this.averageBonusOfLastThreeYears = averageBonusOfLastThreeYears;
	}

	public String getAverageMonthlyIncentiveOfLast6Month() {
		return averageMonthlyIncentiveOfLast6Month;
	}

	public void setAverageMonthlyIncentiveOfLast6Month(String averageMonthlyIncentiveOfLast6Month) {
		this.averageMonthlyIncentiveOfLast6Month = averageMonthlyIncentiveOfLast6Month;
	}

	public String getRentIncome() {
		return rentIncome;
	}

	public void setRentIncome(String rentIncome) {
		this.rentIncome = rentIncome;
	}

	public String getFutureRentIncome() {
		return futureRentIncome;
	}

	public void setFutureRentIncome(String futureRentIncome) {
		this.futureRentIncome = futureRentIncome;
	}

	public String getLoanEMI() {
		return loanEMI;
	}

	public void setLoanEMI(String loanEMI) {
		this.loanEMI = loanEMI;
	}

	public String getPension() {
		return pension;
	}

	public void setPension(String pension) {
		this.pension = pension;
	}

	@Override
	public String toString() {
		return "Elegibility [id=" + id + ", typeOfLoan=" + typeOfLoan + ", firstName=" + firstName + ", middleName="
				+ middleName + ", lastName=" + lastName + ", dateOfBirth=" + dateOfBirth + ", email=" + email
				+ ", mobileNo=" + mobileNo + ", panNo=" + panNo + ", employmentType=" + employmentType
				+ ", employerType=" + employerType + ", monthlyGrossSalary=" + monthlyGrossSalary
				+ ", monthlyNetSalary=" + monthlyNetSalary + ", averageBonusOfLastThreeYears="
				+ averageBonusOfLastThreeYears + ", averageMonthlyIncentiveOfLast6Month="
				+ averageMonthlyIncentiveOfLast6Month + ", rentIncome=" + rentIncome + ", futureRentIncome="
				+ futureRentIncome + ", loanEMI=" + loanEMI + ", pension=" + pension + "]";
	}
}
