import config from '../config/config.js';

// export const axiosInstance = async (endpoint) => {
//   try {
//     const response = await axios.get(config.baseurl + endpoint, {
//       headers: {
//         ...(config.headers || {}),
//       },
//       timeout: 30000,
//     });

//     return {
//       success: true,
//       data: response.data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message,
//     };
//   }
// };
export const axiosInstance = async (endpoint) => {
  try {
    const response = await fetch(config.baseurl + endpoint, {
      headers: {
        ...(config.headers || {}),
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.text();

    // const response = await axios.get(config.baseurl + endpoint, {
    //   headers: {
    //     ...(config.headers || {}),
    //   },
    //   timeout: 30000,
    // });

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
