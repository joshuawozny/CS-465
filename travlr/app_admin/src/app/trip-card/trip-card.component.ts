import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {Trip} from "../models/Trip";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip:Trip;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  protected editTrip(trip: Trip): void{
    localStorage.removeItem("tripCOde");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  protected deleteTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['delete-trip']);
  }

}
