import {StorageState} from './storage-state.enum';

export class Storage {
  id: number;
  title: string;
  kind: string;
  description: string;
  state: StorageState;
}
