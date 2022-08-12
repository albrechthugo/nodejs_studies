import { Pool } from 'pg';
import { createConnection } from '../../database/connection';
import { Product } from '../../domain/entities';
import { ProductsRepository } from '../ProductRepository';

const CREATE_PRODUCT_QUERY = 'INSERT INTO PRODUCTS(ID, NAME, DESCRIPTION, VALUE) VALUES($1, $2, $3, $4)';
const FIND_PRODUCT_BY_ID_QUERY = 'SELECT * FROM PRODUCTS WHERE id = $1 LIMIT 1';
const GET_ALL_PRODUCTS_QUERY = 'SELECT * FROM PRODUCTS';

export class ProductsPostgresRepositories implements ProductsRepository {
  private client: Pool;

  constructor() {
    createConnection().then(client => (this.client = client));
  }

  async create({ id, name, description, value }: Product): Promise<void> {
    const values = [id, name, description, value];
    await this.client.query(CREATE_PRODUCT_QUERY, values);
  }

  async findById(id: string): Promise<Product> {
    const { rows } = await this.client.query<Product>(FIND_PRODUCT_BY_ID_QUERY, [id]);
    const product = rows[0];
    return product;
  }

  async getAll(): Promise<Product[]> {
    const { rows: products } = await this.client.query<Product>(GET_ALL_PRODUCTS_QUERY);
    return products;
  }
}
