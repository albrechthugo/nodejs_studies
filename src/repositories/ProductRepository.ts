import { Product } from '../domain/entities';

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  findById(id: string): Promise<Product>;
}
