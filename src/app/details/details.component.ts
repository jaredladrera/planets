import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../service/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   mars: any = [];

  constructor(private route: ActivatedRoute, private location: Location, private http: HttpService ) { }

  ngOnInit() {
    this.getStar();
    //console.log(this.route.snapshot.params.name)
  }

  getStar()  {

    const pname = this.route.snapshot.paramMap.get('name'); // geting the id from the Url
    //console.log(`${pname} this is correct`);

    this.http.getPlanets(pname).subscribe(mars =>  this.mars = mars);

   // tslint:disable-next-line: align
     return this.mars;
    // this.http.getPlanets(name).subscribe(planets => this.mars = planets);
    //console.log(pname);
  }
}
