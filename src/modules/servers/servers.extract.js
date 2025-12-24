import { load } from 'cheerio';

export default function serversExtract(html) {
  const $ = load(html);

  const episode = $('.server-notice strong b').text().trim().split(' ').at(-1);

  const extractServerList = (block) => {
    const servers = [];
    $(block)
      .find('.server-item')
      .each((i, element) => {
        const serverType = $(element).attr('data-type');
        const serverId = Number($(element).attr('data-id'));
        const serverName = $(element).find('a').text().trim().toLowerCase();
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

    ['megaplay', 'vidwish'].forEach((name) => {
      servers.push({
        index: null,
        type: block.includes('sub') ? 'sub' : 'dub',
        id: null,
        name: name,
      });
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
}
