import { ProductsPostgresRepositories } from '../../repositories';
import { GetProductsController } from './GetProductsController';
import { GetProductsUseCase } from './GetProductsUseCase';

const productsRepository = new ProductsPostgresRepositories();
const getProductsIdUseCase = new GetProductsUseCase(productsRepository);
const getProductsController = new GetProductsController(getProductsIdUseCase);

export { getProductsController };
