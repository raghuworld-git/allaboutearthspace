import axios from 'axios';

export const agencyAPI = axios.create({ baseURL: 'https://lldev.thespacedevs.com/2.2.0/agencies' });