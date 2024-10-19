import { interceptor } from "../../axios/interceptor";
import { extractHomePage } from "../../extractor/hianime/home_page";
import { extractInfoPage } from "../../extractor/hianime/info_page";
import { setResponse, setError } from "../../helper/response";

export const getHomePage = async (c) => {
   try {
      const obj = await interceptor("/home");

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractHomePage(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);

      return setError(c, 500, "something went wrong");
   }
};

export const getInfo = async (c) => {
   try {
      const id = c.req.param("id");
      console.log(id);
      const obj = await interceptor(`/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractInfoPage(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);

      return setError(c, 500, "something went wrong");
   }
};
