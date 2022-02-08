import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getProductBySubCatagory = (subCategory) => API.get(`/products/all/${subCategory}`);
