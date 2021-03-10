import axios from 'axios';

export const countryDetailAPI = axios.create({ baseURL: 'https://restcountries.eu/rest/v2/alpha' });