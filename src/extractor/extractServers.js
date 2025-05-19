import { load } from 'cheerio';

export const extractServers = (html) => {
  const $ = load(html);

  const episode = $('.server-notice strong b').text().trim().split(' ').at(-1);

  const extractServerList = (block) => {
    const servers = [];
    $(block)
      .find('.server-item')
      .each((i, element) => {
        const serverType = $(element).attr('data-type');
        const serverId = $(element).attr('data-id');
        const serverName = $(element).find('a').text().trim();
        const serverIndex = $(element).attr('data-server-id');

        //     HD-1         ---> 4
        //     HD-2         ---> 1
        //     streamSB     ---> 5
        //     streamTape   ---> 3

        servers.push({
          index: Number(serverIndex),
          type: serverType,
          id: serverId,
          name: serverName,
        });
      });
    servers.push({
      index: null,
      type: block.includes('sub') ? 'sub' : 'dub',
      id: null,
      name: 'HD-4',
    });
    return servers;
  };

  const subServers = extractServerList('.servers-sub .ps__-list');

  const dubServers = extractServerList('.servers-dub .ps__-list');

  return {
    episode: Number(episode),
    sub: subServers,
    dub: dubServers,
  };
};
