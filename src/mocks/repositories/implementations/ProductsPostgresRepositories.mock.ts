import { Product } from '~/domain/entities';
import { ProductsRepository } from '../../../repositories';

export class ProductsPostgresRepositoriesMock implements ProductsRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<void> {
    setTimeout(() => {
      this.products = [...this.products, product];
    });
  }
}
