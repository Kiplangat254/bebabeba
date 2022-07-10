import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
