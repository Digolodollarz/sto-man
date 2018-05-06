import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../store/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  error: any = null;
  dash: any = {};

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.getAllUserRequests().subscribe(result => {
      this.dash.pending = result[0];
      this.dash.approved = result[1];
      this.dash.denied = result[2];
    }, error => {
      console.log('Error of some sort', error);
      this.error = error;
    });
  }

}
