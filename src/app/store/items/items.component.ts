import {Component, OnInit} from '@angular/core';
import {SmTitleService} from '../../sm-title.service';
import {StoreService} from '../store.service';
import {Item} from '../../_models/item';
import {MatDialog} from '@angular/material';
import {ItemDetailComponent} from '../item-detail/item-detail.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private titleService: SmTitleService,
              private storeService: StoreService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.titleService.setTitle('Items');

    this.storeService.getItems().subscribe(items => this.items = items,
      error => console.error(error));
  }

  openItem(item: Item): void {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      // width: '250px',
      data: {item: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
