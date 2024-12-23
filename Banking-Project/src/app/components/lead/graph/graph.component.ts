import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartType } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent {
  // Chart type: 'bar', 'line', 'pie', etc.
  chartType: ChartType = 'bar';

  // Chart labels (x-axis)
  chartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  // Chart data
  chartData: ChartData = {
    labels: this.chartLabels,
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Sales Data',
        backgroundColor: 'rgba(77, 83, 96, 0.2)',
        borderColor: 'rgba(77, 83, 96, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  constructor() {}

  // You can add functions here to dynamically update the chart data or other properties
  updateChartData(newData: number[]) {
    this.chartData.datasets[0].data = newData;
  }
}
