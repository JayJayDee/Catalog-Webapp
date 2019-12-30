import { requester } from './api-requester';

export const requestCatalog =
  async (catalogId) => {
    const resp = 
      await requester()
        .get(`/catalog/${catalogId}`);
    return resp.data;
  };