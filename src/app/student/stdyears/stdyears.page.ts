import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-stdyears',
  templateUrl: './stdyears.page.html',
  styleUrls: ['./stdyears.page.scss'],
})
export class StdyearsPage implements OnInit {
  myId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');


  }

}
