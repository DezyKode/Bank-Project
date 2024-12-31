import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements AfterViewInit {
  // Data for lead sources
  leadSourceData = [
    { name: 'Walking', value: 0 },
    { name: 'Booking', value: 0 },
    { name: 'Calling', value: 0 },
    { name: 'Reference', value: 0 }
  ];
  leaders = [
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
    { name: 'Rohit Jadhav', amount: 0, imageUrl: './assets/images/leader1.jpg' },
    { name: 'John Doe', amount: 100, imageUrl: './assets/images/leader2.jpg' },
  ];
  // Data for employee statistics
  employeeData = [
    { name: 'John Doe', totalLeads: 0, leadGenerating: 0, leadProcessing: 0 },
    { name: 'Jane Smith', totalLeads: 0, leadGenerating: 0, leadProcessing: 0 }
  ];

  // Data for overview cards
  overviewCards = [
    {
      title: 'Users',
      value: 150,
      color: 'text-green-500',
      icon: 'fas fa-user',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Sales',
      value: 300,
      color: 'text-red-500',
      icon: 'fas fa-shopping-cart',
      iconColor: 'text-orange-500'
    },
    {
      title: 'Revenue',
      value: '$1200',
      color: 'text-purple-500',
      icon: 'fas fa-dollar-sign',
      iconColor: 'text-green-500'
    },
    {
      title: 'Follow-ups',
      value: 25,
      color: 'text-yellow-600',
      icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Closed Leads',
      value: 40,
      color: 'text-red-600',
      icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Pending Leads',
      value: 15,
      color: 'text-gray-600',
      icon: 'fas fa-exclamation-circle',
      iconColor: 'text-gray-500'
    }
  ];

  // Data for secondary overview cards (if needed)
  secondOverviewCards = [
    {
      title: 'Leads Processed',
      value: 50,
      color: 'text-blue-500',
      icon: 'fas fa-check-circle',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Revenue',
      value: '$800',
      color: 'text-purple-500',
      icon: 'fas fa-dollar-sign',
      iconColor: 'text-green-500'
    }
  ];

  

  // Data for employee statistics
  employees = [
    { name: 'Rahul', totalCases: 0, sanctionCases: 0, disbursementCases: 0, completedCases: 0 },
    { name: 'Arti', totalCases: 0, sanctionCases: 0, disbursementCases: 0, completedCases: 0 },
    { name: 'Shubham', totalCases: 0, sanctionCases: 0, disbursementCases: 0, completedCases: 0 },
    { name: 'Atharv', totalCases: 0, sanctionCases: 0, disbursementCases: 0, completedCases: 0 }
  ];

  // Bar Chart Initialization
  ngAfterViewInit() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Login', 'Sanction', 'Disbursement'],
        datasets: [
          {
            label: 'Cases',
            data: [4, 0, 2],
            backgroundColor: ['#ffcc00', '#ff9900', '#ff6600'],
          }
        ]
      },
      options: {
        responsive: true,
      }
    });
  }
}