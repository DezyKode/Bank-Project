import { Component } from '@angular/core';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.css'
})
export class Application {
  
  applicantDetails = {
    name: 'Namrath Suryakant Oakwood',
    dob: '15 Jul 1987',
    email: 'example@mail.com',
    mobile: '9860534770',
    pan: 'bxop844001',
    employmentType: 'Salaried',
    employmentPeriod: '10 Years',
    retirementAge: 60,
    leadsource:'walking',
    employetype:'private employer',
    grossSalary: '₹ 40,000',
    netSalary: '₹ 35,000',
    AverageBonusOfLast3Years:"0.Rs",
    AverageMonthlyIncentiveOfLast6Months:"0.Rs",
    rentIncome:"0.RS",
    loanEmi:"0.RS",
    futureRentIncome:"0.RS",
    pension:"0.RS",
    cibilScore: 600,
  };



}
