import { load } from "cheerio";
import { axiosInstance, fetchSources } from "../axiosInstances/interceptor";
import axios from "axios";

export const extractEpisodesInChunks = async (html) => {
  const $ = load(html);

  const obj = JSON.parse($("#syncData").text());

  const name = obj.series_url.split("/").at(-1);
  const id = obj.anilist_id === "" ? obj.mal_id : obj.anilist_id;

  const newId = name.replace(/\d+$/, id);

  console.log(newId);

  const url = `https://data.hiddenleaf.to/assets/${newId}.json`;

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get(url, {
        headers: {
          Referrer: url,
        },
      });
      return {
        status: true,
        data,
      };
    } catch (error) {
      console.log(error.message);
      return {
        status: false,
        message: error.message,
      };
    }
  };
  const resObj = await getData();

  return resObj;
};
