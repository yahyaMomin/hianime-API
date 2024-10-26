import axios from "axios";

const baseUrl = "https://hianime.to";

const headers = {
   USER_AGENT: "Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0",
   ACCEPT_ENCODING: "gzip, deflate, br",
   ACCEPT: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
   X_REQUESTED_WITH: "XMLHttpRequest",
};

const axiosInstance = axios.create({
   headers: {
      "Accept-Encoding": headers.ACCEPT_ENCODING,
      "User-Agent": headers.USER_AGENT,
      Accept: headers.ACCEPT,
   },
});

export const interceptor = async (endpoint) => {
   try {
      const { data } = await axiosInstance.get(baseUrl + endpoint);

      console.log(data);

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
