import { Component, OnInit } from '@angular/core';
import { faCoffee, faChartBar, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})
export class BottomNavBarComponent implements OnInit {
  faCoffee = faCoffee;
  faChartBar = faChartBar;
  faMapMarkedAlt = faMapMarkedAlt

  constructor() { }

  ngOnInit() {
  }

}
