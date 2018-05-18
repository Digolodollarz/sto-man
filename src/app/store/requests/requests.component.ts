import {Component, OnInit} from '@angular/core';
import {SmTitleService} from '../../sm-title.service';
import {StoreService} from '../store.service';
import {ItemRequest} from '../../_models/item-request';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests: ItemRequest[];
  error: any;

  constructor(private titleService: SmTitleService,
              private alertService: AlertService,
              private storeService: StoreService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Manage requests');
    this.storeService.getAllRequests().subscribe(
      requests => {
        this.requests = requests;
      },
      error1 => this.error = error1
    );
  }

  approveRequest(request: ItemRequest) {
    this.storeService.approve(request).subscribe(
      req => {
        this.alertService.simpleSnack('Approved');
        this.storeService.getAllRequests().subscribe(
          requests => {
            this.requests = requests;
          },
          error1 => this.error = error1
        );
      }, error => this.error = error
    );
  }

  denyRequest(request: ItemRequest, reason: string) {
    this.storeService.deny(request, reason).subscribe(
      req => {
        this.alertService.simpleSnack('Denied');
        this.storeService.getAllRequests().subscribe(
          requests => {
            this.requests = requests;
          },
          error1 => this.error = error1
        );
      }, error => this.error = error
    );
  }

}
