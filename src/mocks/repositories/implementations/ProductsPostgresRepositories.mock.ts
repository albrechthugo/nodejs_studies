import { Product } from '../../../domain/entities';
import { ProductsRepository } from '../../../repositories';

export class ProductsPostgresRepositoriesMock implements ProductsRepository {
  private products: Product[] = [new Product()];

  async create(product: Product): Promise<void> {
    setTimeout(() => {
      this.products = [...this.products, product];
    });
  }

  async findById(id: string): Promise<Product> {
    return new Promise(resolve => {
      resolve(this.products.find(product => product.id === id));
    });
  }
}
