import { GetProductsParamsDto } from '../domain/dtos';
import { Product } from '../domain/entities';

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  findById(id: string): Promise<Product>;
  getAll(params?: GetProductsParamsDto): Promise<Product[]>;
}
