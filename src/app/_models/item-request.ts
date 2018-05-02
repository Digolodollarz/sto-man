import {User} from './user';
import {Item} from './item';

export class ItemRequest {
  id: number;
  title: String;
  description: String;
  status: any;
  reason: String;
  item: Item;
  user: User;
  itemCount: number;
}
