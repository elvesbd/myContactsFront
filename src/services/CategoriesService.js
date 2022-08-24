import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
  // falta implementar
  /* async createCategories(contact) {
    return this.httpClient.get('/contacts', contact);
  } */
}

export default new CategoriesService();
