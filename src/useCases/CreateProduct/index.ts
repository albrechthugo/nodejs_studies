import { ProductsPostgresRepositories } from '../../repositories';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const productsRepository = new ProductsPostgresRepositories();
const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };
