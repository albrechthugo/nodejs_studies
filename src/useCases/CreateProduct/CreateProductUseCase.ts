import { CreateProductDto } from '../../domain/dtos';
import { Product } from '../../domain/entities';
import { ProductsRepository } from '../../repositories';

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(dto: CreateProductDto): Promise<void> {
    const product: Product = {
      ...new Product(),
      ...dto
    };

    await this.productsRepository.create(product);
  }
}
