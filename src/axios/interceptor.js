import axios from "axios";

const baseUrl = "https://hianime.to";
export const interceptor = async (endpoint) => {
   try {
      const { data } = await axios.get(`${baseUrl}/${endpoint}`);

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
