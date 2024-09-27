import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; 

export const fetchMobiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/mobiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mobiles:', error);
    throw error;
  }
};

export const fetchComputers = async () => {
  try {
    const response = await axios.get(`${API_URL}/computers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching computers:', error);
    throw error;
  }
};
