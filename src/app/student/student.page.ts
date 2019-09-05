import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  @ViewChild('mybarstd') mybarstd;
  chartstd: any;
  liststd: any;
  dyears: any;
  dtotal: any;
  list: any;
  cstd: any;
  facstd: any;
  yearstd: any;

  constructor(private http: HttpClient, public router: Router) {

  }

  get_stdyears() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Stdyears')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.dyears = res.Table.map(res => res.ACADYEAR)
        this.dtotal = res.Table.map(res => res.TOTAL)
        this.testt();
      });
  }

  get_stdfiedfac() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Stdfiedfac')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.facstd = res.Table.map(res => res.FACULTYNAME)
        this.yearstd = res.Table.map(res => res.ADMITACADYEAR)
        this.cstd = res.Table.map(res => res.CSTD)
        console.log(this.list);
      });
  }


  ngOnInit() {
    this.get_stdyears();
    this.get_stdfiedfac();

  }

  // mybarstdplot() {   
  //var ctx = (<any>document.getElementById('mybarstd')).getContext('2d');
  //   this.chartstd = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: this.dyears,
  //       datasets: [{
  //         label: '# จำนวนสถิตินักศึกษา',
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         data: this.dtotal,
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         xAxes: [{
  //           barThickness: 10,
  //           maxBarThickness: 10,
  //           minBarLength: 2,
  //           gridLines: {
  //             offsetGridLines: true
  //           }
  //         }]
  //       },
  //       legend: {
  //         position: "bottom",
  //         display: true,
  //         labels: {
  //           padding: 15,
  //           boxWidth: 20
  //         }
  //       }
  //     }
  //   });

  testt() {
    var canvas: any = document.getElementById("mybarstd");
    var ctx = canvas.getContext("2d");
    var myNewChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.dyears,
        datasets: [{
          label: '# จำนวนสถิตินักศึกษา',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: this.dtotal,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barThickness: 10,
            maxBarThickness: 10,
            minBarLength: 2,
            gridLines: {
              offsetGridLines: true
            }
          }]
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        }
      }
    });

    canvas.onclick = function (evt: any) {
      var activePoints = myNewChart.getElementsAtEvent(evt);
      if (activePoints[0]) {
        var chartData = activePoints[0]['_chart'].config.data;
        var idx = activePoints[0]['_index'];

        var stdyear = chartData.labels[idx];
        var stdcount = chartData.datasets[0].data[idx];
        var color = chartData.datasets[0].backgroundColor[idx]; //Or any other data you wish to take from the clicked slice

        // var datalabel = (stdyear + ' ' + stdcount); //Or any other function you want to execute. I sent the data to the server, and used the response i got from the server to create a new chart in a Bootstrap modal.

        // this.router.navigate(['stdyears', { year: stdyear }]);
        console.log(evt);
      }
      // console.log(datalabel);
    };

  }

  mybarstdplot() {
    var ctx = (<any>document.getElementById('mybarstd')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.dyears,
        datasets: [{
          label: '# จำนวนสถิตินักศึกษา',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: this.dtotal,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barThickness: 10,
            maxBarThickness: 10,
            minBarLength: 2,
            gridLines: {
              offsetGridLines: true
            }
          }]
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        }
      }
    });


  }
}

