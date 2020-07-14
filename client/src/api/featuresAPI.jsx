import axios from 'axios';

export const featuresAPI = async () => {
  const response = await axios.get('/api/features');
  return response.data;
};
