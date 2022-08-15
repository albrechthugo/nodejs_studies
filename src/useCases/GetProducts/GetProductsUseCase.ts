import { GetProductsParamsDto } from '../../domain/dtos';
import { Product } from '../../domain/entities';
import { ProductsRepository } from '../../repositories';

export class GetProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(params?: GetProductsParamsDto): Promise<Product[]> {
    return this.productsRepository.getAll(params);
  }
}
