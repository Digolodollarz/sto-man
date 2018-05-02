export class Item {
  id: number;
  partNumber: string;
  name: string;
  description: string;
  manufacturer: string;
  consumable: boolean;
  availableStock: number;
  totalStock: number;
  takenStock: number;
  lostStock: number;
  limited: boolean;
  limits: number;
  restricted: boolean;
  imageUrl: string;
  storage: Storage;
}
