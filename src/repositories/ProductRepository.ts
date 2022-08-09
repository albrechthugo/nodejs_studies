import { Product } from '../domain/entities/Product';

export interface ProductsRepository {
  create(product: Product): Promise<void>;
}
