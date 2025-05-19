import axios from 'axios';
import config from '../config/config.js';

export const axiosInstance = async (endpoint) => {
  try {
    const { data } = await axios.get(config.baseurl + endpoint, {
      headers: config.headers,
    });

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
