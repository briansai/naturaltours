import axios from 'axios';

export const toursAPI = async () => {
  const response = await axios.get('/api/tours');
  return response.data;
};
