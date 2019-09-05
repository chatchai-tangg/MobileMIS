import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ArgumentType } from '@angular/compiler/src/core';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  list: any;
  data1: any;
  dataname: any;
  chart: any;
  dataposition: any;
  datanameposition: any;
  dlname: any;
  degree: any;
  etname: any;
  countreq: any;


  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private http: HttpClient) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  get_data() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Employee')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.data1 = res.Table.map(res => res.Total)
        this.dataname = res.Table.map(res => res.et_name)
        // console.log(this.data1)
        // console.log(this.dataname)
        this.barChartMethod();
      });
  }

  get_reqscholar() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Reqscholar')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.dataposition = res.Table.map(res => res.ภายในประเทศ)
        this.datanameposition = res.Table.map(res => res.ต่างประเทศ)
        // console.log(this.dataposition)
        // console.log(this.datanameposition)       
      });
  }

  get_classifiededu() {
    let labels: any = [];
    let data: any;
    this.http.get('http://203.158.144.140/APIchart/charts/Classifiededu')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.dlname = res.Table.map(res => res.dl_name_th)
        this.degree = res.Table.map(res => res.degreeclass)
        this.Chartscholar();
      });
  }

  get_reqposition() {
    this.http.get('http://203.158.144.140/APIchart/charts/Reqposition')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.etname = res.Table.map(res => res.ประเภท)
        this.countreq = res.Table.map(res => res.จำนวน)
        this.Chartreqposition();
      })
  }


  ngOnInit() {
    this.get_data();
    this.get_reqscholar();
    this.get_classifiededu();
    this.get_reqposition();
  }



  barChartMethod() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',
      // The data for our dataset      
      data: {
        labels: this.dataname,
        datasets: [{
          label: "dataset",
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
          data: this.data1,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        },
      }
    });
  }

  Chartscholar() {
    var ctxscholar = (<any>document.getElementById('Chartscholar')).getContext('2d');
    this.chart = new Chart(ctxscholar, {
      // The type of chart we want to create
      type: 'horizontalBar',
      // The data for our dataset      
      data: {
        labels: this.dlname,
        datasets: [{
          label: "ระดับการศึกษา",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          data: this.degree,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          },
          render: 'value'
        },
      }
    });
  }

  Chartreqposition() {
    var ctxreq = (<any>document.getElementById('Chartreqposition')).getContext('2d');
    this.chart = new Chart(ctxreq, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset      
      data: {
        labels: this.etname,
        datasets: [{
          label: "ผู้ที่สามารถยื่นขอตำแหน่งวิชาการ",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          data: this.countreq,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          },
          render: 'value'
        },
      }
    });
  }

}


  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

