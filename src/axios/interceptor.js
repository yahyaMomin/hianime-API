import axios from "axios";
import { serveStatic } from "hono/serve-static";

const baseUrl = "https://hianime.to";
export const interceptor = async (endpoint) => {
   console.log(baseUrl + endpoint);

   try {
      const { data } = await axios.get(baseUrl + endpoint);

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
   console.log("_________________");
   console.log("referer is -->  " + baseUrl + Referer);
   console.log("endpoint is --> " + baseUrl + endpoint);
   console.log("_________________");

   const headers = {
      Referer: baseUrl + Referer,
      "User-Agent":
         "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
      "X-Requested-With": "XMLHttpRequest",
   };
   try {
      const {
         data: { html },
      } = await axios.get(baseUrl + endpoint, {
         headers,
      });

      if (!html) throw new Error("page not found");

      const blob = new Blob([html], { type: "text/html" });

      await Bun.write("response.html", blob);
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
   console.log("_________________");
   console.log("referer is -->  " + baseUrl + Referer);
   console.log("endpoint is --> " + baseUrl + endpoint);
   console.log("_________________");

   const headers = {
      Referer: baseUrl + Referer,
      "User-Agent":
         "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
      "X-Requested-With": "XMLHttpRequest",
   };
   try {
      const { data } = await axios.get(baseUrl + endpoint, {
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
