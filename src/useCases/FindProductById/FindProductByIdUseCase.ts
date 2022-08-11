import { Product } from '../../domain/entities';
import { ProductsRepository } from '../../repositories';

export class FindProductByIdUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productsRepository.findById(id);
    return product;
  }
}
