import { v4 as uuid } from 'uuid';

export class Product {
  id: string;
  name: string;
  description: string;
  value: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
