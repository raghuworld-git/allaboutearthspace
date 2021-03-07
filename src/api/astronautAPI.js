import axios from 'axios';

export const astronautAPI = axios.create({ baseURL: 'https://lldev.thespacedevs.com/2.2.0/astronaut' });