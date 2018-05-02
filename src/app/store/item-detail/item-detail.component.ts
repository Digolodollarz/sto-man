import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Item} from '../../_models/item';
import {StoreService} from '../store.service';
import {AuthService} from '../../auth.service';
import {ItemRequest} from '../../_models/item-request';
import {User} from '../../_models/user';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  user: User;
  itemCount = 1;

  constructor(
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storeService: StoreService,
    private authService: AuthService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.item = this.data.item;
    this.user = this.authService.getUser();
    console.log(this.user);
  }

  getItem() {
    const request = new ItemRequest();
    request.item = this.item;
    request.user = this.user;
    request.itemCount = this.itemCount;
    this.storeService.requestItem(request).subscribe(
      result => {
        console.log('Component Requested', result);
        this.dialogRef.close(result);
      },
      error1 => {
        this.alertService.simpleSnack('Something terrible happened');
        console.error('Error requesting item', error1);
      }
    );
  }

}
