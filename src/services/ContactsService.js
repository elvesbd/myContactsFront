import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/792b67c9-6bef-4123-8a17-fb1a9dc1ec3c?orderBy=${orderBy}`);
  }

  async createContacts(contact) {
    return this.httpClient.get('/contacts', contact);
  }
}

export default new ContactsService();
