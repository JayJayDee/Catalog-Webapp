import { requester } from './api-requester';
import { ApiError } from './errors';

export const requestCatalog =
  async (catalogId) => {
    try {
      const resp =
        await requester()
          .get(`/catalog/${catalogId}`);
      return resp.data;
    } catch (err) {
      if (err.response) {
        throw new ApiError(err.response.data.error);  
      }
      throw err;
    }
  }
    