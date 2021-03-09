import axios from 'axios';

export const launchAPI = axios.create({ baseURL: 'https://lldev.thespacedevs.com/2.2.0/launch' });

//https://ll.thespacedevs.com/
//https://lldev.thespacedevs.com/2.2.0/launch