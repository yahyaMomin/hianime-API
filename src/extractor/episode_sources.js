import axios from "axios";
import extract from "../utils/megacloud";

export const extractSource = async (res) => {
   const { link } = res.data;
   const urlObj = new URL(link);

   const url = "https://megacloud.tv/embed-2/ajax/e-1/getSources?id=";

   const id = urlObj.pathname.split("/").at(-1);

   console.log(url + id);

   const { data } = await axios.get(url + id, {
      headers: {
         Referer: urlObj.href,
         "Accept-Encoding": "gzip, deflate",
         "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
         "X-Requested-With": "XMLHttpRequest",
      },
   });

   const response = await extract(data);

   return response;
};
