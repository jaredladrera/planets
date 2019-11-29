import { HttpService } from './../service/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 @Input() name;

  planeta;
  constructor(private Req: HttpService, public router: Router ) { }


  dtOptions: DataTables.Settings = {}
  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.Req.getPlanet().subscribe(data => {
      this.planeta = data;
      console.log(this.planeta);
    });
    // this.Req.testing();
  }



}
