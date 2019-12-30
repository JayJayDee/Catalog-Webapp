import { create } from 'axios';

export const requester =
  () => 
    create({
      baseURL: process.env.VUE_APP_API_BASE
    });