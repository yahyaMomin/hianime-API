import axios from 'axios';
import config from '../config/config.js';

export const axiosInstance = async (endpoint) => {
  console.log(config.baseurl + endpoint);

  try {
    const response = await axios.get(config.baseurl + endpoint, {
      headers: {
        ...(config.headers || {}),
      },
      timeout: 30000,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
