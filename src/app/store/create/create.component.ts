import {Component, OnInit} from '@angular/core';
import {SmTitleService} from '../../sm-title.service';
import {Item} from '../../_models/item';
import {Storage} from '../../_models/storage';
import {StorageState} from '../../_models/storage-state.enum';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newItem = new Item();
  stores: Storage[];

  constructor(private titleService: SmTitleService,
              private storeService: StoreService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Add Component');
    this.stores = [
      {
        id: 0,
        title: 'D1',
        kind: 'DRAWER',
        description: 'Neur',
        state: StorageState.AVAILABLE
      },
      {
        id: 1,
        title: 'D2',
        kind: 'DRAWER',
        description: 'Neur',
        state: StorageState.AVAILABLE
      },
      {
        id: 2,
        title: 'D3',
        kind: 'DRAWER',
        description: 'Neur',
        state: StorageState.AVAILABLE
      },
      {
        id: 3,
        title: 'D3',
        kind: 'DRAWER',
        description: 'Neur',
        state: StorageState.AVAILABLE
      }
    ];
  }

  addItem() {
    this.storeService.addItem(this.newItem)
      .subscribe(result => {
          console.log(result);
        },
        error1 => console.error(error1));
  }

}
