import axios from 'axios'

const api = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT_ID}`,
});

api.interceptors.request.use(config => {

  config.headers.Authorization = `Bearer ${process.env.API_TOKEN}`

  return config;
});

export default api;
