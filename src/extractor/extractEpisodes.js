import { load } from "cheerio";
import { axiosInstance, fetchSources } from "../axiosInstances/interceptor";
import axios from "axios";

export const extractEpisodesSources = async (html, episodeId = null) => {
  const $ = load(html);

  const rawString = $("#syncData");

  if (rawString.length < 1) {
    return {
      status: false,
      message: "anime not found",
    };
  }
  const obj = JSON.parse(rawString.text());

  console.log(obj);

  const name = obj.series_url.split("/").at(-1);
  const id = obj.anilist_id === "" ? obj.mal_id : obj.anilist_id;

  const newId = name.replace(/\d+$/, id);

  const url = `https://data.hiddenleaf.to/assets/${newId}.json`;

  console.log(url);

  const reArangeString = (string) => {
    return string
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");
  };

  const getData = async () => {
    try {
      const { data: rawEpisodes } = await axiosInstance.get(url, {
        headers: {
          Referrer: "https://soulsociety.to",
        },
      });

      if (!rawEpisodes) {
        throw new Error(`Episodes not found for ${newId} ID`);
      }

      // If episodeId is provided, return only the specified episode
      if (episodeId) {
        const episode = rawEpisodes[episodeId];
        if (!episode) {
          throw new Error(`Episode ${episodeId} not found`);
        }

        return {
          status: true,
          data: {
            id: parseInt(episodeId),
            title: episode.title,
            intro: episode.intro,
            outro: episode.outro,
            isFiller: episode.isFiller,
            sources: {
              dubbed: episode.source.DUBBED
                ? Object.entries(episode.source.DUBBED).map(([name, url]) => ({
                    id: reArangeString(name),
                    name,
                    url,
                  }))
                : [],
              subbed: episode.source.SUBBED
                ? Object.entries(episode.source.SUBBED).map(([name, url]) => ({
                    id: reArangeString(name),
                    name,
                    url,
                  }))
                : [],
            },
            captions: episode.captions
              ? episode.captions.map((caption) => ({
                  lang: caption.lang,
                  url: caption.url,
                }))
              : [],
            downloadLinks: {
              dubbed: episode.downloadLink.DUBBED,
              subbed: episode.downloadLink.SUBBED,
            },
          },
        };
      }

      // Otherwise, return all episodes
      const episodes = Object.keys(rawEpisodes).map((key) => {
        const episode = rawEpisodes[key];
        return {
          id: parseInt(key),
          title: episode.title,
          intro: episode.intro,
          outro: episode.outro,
          isFiller: episode.isFiller,
          sources: {
            dubbed: episode.source.DUBBED
              ? Object.entries(episode.source.DUBBED).map(([name, url]) => ({
                  id: reArangeString(name),
                  name,
                  url,
                }))
              : [],
            subbed: episode.source.SUBBED
              ? Object.entries(episode.source.SUBBED).map(([name, url]) => ({
                  id: reArangeString(name),
                  name,
                  url,
                }))
              : [],
          },
          captions: episode.captions
            ? episode.captions.map((caption) => ({
                lang: caption.lang,
                url: caption.url,
              }))
            : [],
          downloadLinks: {
            dubbed: episode.downloadLink.DUBBED,
            subbed: episode.downloadLink.SUBBED,
          },
        };
      });

      return {
        status: true,
        data: episodes,
      };
    } catch (error) {
      console.log(error.message);
      return {
        status: false,
        message: "anime not found :( ",
      };
    }
  };

  return await getData();
};
