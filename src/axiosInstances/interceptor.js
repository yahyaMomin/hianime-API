import axios from "axios";

const baseUrl = "https://hianime.to";

// USER_AGENT_HEADER: "Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0",
// ACCEPT_ENCODEING_HEADER: "gzip, deflate, br",
// ACCEPT_HEADER: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"

// Updated headers to exclude Brotli (br) compression
const axiosInstance = axios.create({
   headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0",
      Accept:
         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
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
      "X-Requested-With": "XMLHttpRequest",
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
      "X-Requested-With": "XMLHttpRequest",
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
