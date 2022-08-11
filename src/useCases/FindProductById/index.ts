import { ProductsPostgresRepositories } from '../../repositories';
import { FindProductByIdController } from './FindProductByIdController';
import { FindProductByIdUseCase } from './FindProductByIdUseCase';

const productsRepository = new ProductsPostgresRepositories();
const findProductByIdUseCase = new FindProductByIdUseCase(productsRepository);
const findProductByIdController = new FindProductByIdController(findProductByIdUseCase);

export { findProductByIdController };
