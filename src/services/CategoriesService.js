import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });
    return categories.map(CategoryMapper.toDomain);
  }
  // falta implementar
  /* async createCategories(contact) {
    return this.httpClient.get('/contacts', contact);
  } */
}

export default new CategoriesService();
