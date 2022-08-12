import { Product } from '../../domain/entities';
import { ProductsRepository } from '../../repositories';

export class GetProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<Product[]> {
    return this.productsRepository.getAll();
  }
}
