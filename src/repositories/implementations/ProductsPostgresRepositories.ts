import { Pool } from 'pg';
import { createConnection } from '../../database/connection';
import { Product } from '../../domain/entities';
import { ProductsRepository } from '../ProductRepository';

const CREATE_PRODUCT_QUERY = `INSERT INTO PRODUCTS(ID, NAME, DESCRIPTION, VALUE) VALUES($1, $2, $3, $4)`;

export class ProductsPostgresRepositories implements ProductsRepository {
  private client: Pool;

  constructor() {
    createConnection().then(client => (this.client = client));
  }

  async create({ id, name, description, value }: Product): Promise<void> {
    const values = [id, name, description, value];
    await this.client.query(CREATE_PRODUCT_QUERY, values);
  }
}
