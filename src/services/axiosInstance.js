import axios from 'axios';
import config from '../config/config.js';

export const axiosInstance = async (endpoint) => {
  try {
    const response = await axios.get(config.baseurl + endpoint, {
      headers: {
        ...config.headers,
      },
    });

    console.log(response.config.headers);

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
