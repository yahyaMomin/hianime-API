import axios from "axios";

const baseUrl = "https://hianime.to";

// Updated headers to exclude Brotli (br) compression
const axiosInstance = axios.create({
   headers: {
      "Accept-Encoding": "gzip, deflate", // Exclude 'br' to avoid Brotli compression
      "User-Agent":
         "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
      "X-Requested-With": "XMLHttpRequest",
   },
});

export const interceptor = async (endpoint) => {
   try {
      const { data } = await axiosInstance.get(baseUrl + endpoint);

      const obj = {
         status: true,
         data,
      };
      return obj;
   } catch (error) {
      console.log(error.message);

      const obj = {
         status: false,
         message: error.message,
      };
      return obj;
   }
};

export const fetchFromApi = async (Referer, endpoint) => {
   const headers = {
      Referer: baseUrl + Referer,
   };
   try {
      const {
         data: { html },
      } = await axiosInstance.get(baseUrl + endpoint, {
         headers,
      });

      if (!html) throw new Error("page not found");

      const obj = {
         status: true,
         data: html,
      };
      return obj;
   } catch (error) {
      console.log(error.message);

      const obj = {
         status: false,
         message: error.message,
      };
      return obj;
   }
};

export const fetchSources = async (Referer, endpoint) => {
   const headers = {
      Referer: baseUrl + Referer,
   };
   try {
      const { data } = await axiosInstance.get(baseUrl + endpoint, {
         headers,
      });

      const obj = {
         status: true,
         data,
      };
      return obj;
   } catch (error) {
      console.log(error.message);
      const obj = {
         status: false,
         message: error.message,
      };
      return obj;
   }
};
