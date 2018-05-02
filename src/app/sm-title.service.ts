import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable()
export class SmTitleService {

  constructor(private titleService: Title) {
  }

  setTitle(title: string) {
    this.titleService.setTitle(title + ' | Store Manager');
  }

}
