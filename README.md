# <p align="center">📺 hianime-API</p>

<div align="center">
    hianime-API is a RESTful API that utilizes web scraping to fetch anime content from hianime.to. It provides endpoints to retrieve anime details, episodes, and streaming links.
</div>
<br/>

> [!IMPORTANT]
>
> 1. There was previously a hosted version of this API for showcasing purposes only, and it was misused; since then, there have been no other hosted versions. It is recommended to deploy your own instance for personal use by customizing the API as you need it to be.
> 2. This API is just an unofficial API for [hianimez.to](https://hianimez.to) and is in no other way officially related to the same.
> 3. The content that this API provides is not mine, nor is it hosted by me. These belong to their respective owners. This API just demonstrates how to build an API that scrapes websites and uses their content.

## <span id="installation">💻 Installation</span>

### # Prerequisites

make sure you have installed bun js and pnpm

or you can download from here

1. bun.js

```bash
https://bun.sh/docs/installation
```

<!-- 2. pnpm

```bash
https://pnpm.io/installation
``` -->

### Local

1. Clone the repository and move into the directory.

   ```bash
   git clone https://github.com/yahyaMomin/hianime-API.git
   ```

2. navigate to project

   ```bash
     cd hianime-API
   ```

3. Install all the dependencies.

   ```copy
   bun install
   ```

4. Start the server!

   ```bash
   bun run dev
   ```

   Now the server should be running on [http://localhost:3030](http://localhost:3030)

### Render

Deploy your own instance of hianime-API on Render.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/yahyaMomin/hianime-API)

## <span id="documentation">📚 Documentation</span>

The endpoints exposed by the api are listed below with examples that uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), but you can use any http library.

### `GET` Anime Home Page

#### Endpoint

```bash
/api/v1/home
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/home');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "spotlight": [
      {
        "title": "Wind Breaker Season 2",
        "alternativeTitle": "Wind Breaker Season 2",
        "id": "wind-breaker-season-2-19542",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/59432357a3f65426885429f5b9a57e02.jpg",
        "rank": 1,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Apr 4, 2025",
        "synopsis": "The second season of WIND BREAKER.\n\nWelcome back to Furin High School, an institution infamous for its population of brawny brutes who solve every conflict with a show of strength. Some of the students even formed a group, Bofurin, which protects the town. Haruka Sakura, a first-year student who moved in from out of town, is only interested in one thing: fighting his way to the top!",
        "episodes": {
          "sub": 9,
          "dub": 7,
          "eps": 9
        }
      },
     ...
    ],
    "trending": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "rank": 1,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "id": "one-piece-100"
      },
     ...
    ],
    "topAiring": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1130,
          "dub": 1122,
          "eps": 1130
        }
      },

    ],
    "mostPopular": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1130,
          "dub": 1122,
          "eps": 1130
        }
      },

    ],
    "mostFavorite": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1130,
          "dub": 1122,
          "eps": 1130
        }
      },
      ...
    ],
    "latestCompleted": [
      {
        "title": "Cardfight!! Vanguard: Divinez Deluxe-hen",
        "alternativeTitle": "Cardfight!! Vanguard: Divinez Deluxe-hen",
        "id": "cardfight-vanguard-divinez-deluxe-hen-19480",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d154104a2f93c0a20bd73247e08f3e8d.jpg",
        "type": "TV",
        "episodes": {
          "sub": 13,
          "dub": 6,
          "eps": 13
        }
      },
     ...
    ],
    "latestEpisode": [
      {
        "title": "Pokémon Horizons: The Series",
        "alternativeTitle": "Pokemon (2023)",
        "id": "pokemon-horizons-the-series-18397",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4b145f650126e400b69e783e3d6cdd2a.jpg",
        "episodes": {
          "sub": 97,
          "dub": 78,
          "eps": 97
        }
      },
     ...
    ],
    "newAdded": [
      {
        "title": "Cardfight!! Vanguard: Divinez Deluxe-hen",
        "alternativeTitle": "Cardfight!! Vanguard: Divinez Deluxe-hen",
        "id": "cardfight-vanguard-divinez-deluxe-hen-19480",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d154104a2f93c0a20bd73247e08f3e8d.jpg",
        "episodes": {
          "sub": 13,
          "dub": 6,
          "eps": 13
        }
      },
      {
        "title": "Lost in Starlight",
        "alternativeTitle": "I Byeol-e Pil-yohan",
        "id": "lost-in-starlight-19702",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3868e06531d0ad54eefdf4b5269a91b2.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        }
      },
      {
        "title": "Batman Ninja vs. Yakuza League",
        "alternativeTitle": "Ninja Batman tai Yakuza League",
        "id": "batman-ninja-vs-yakuza-league-19489",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f4ab884b46d2a0b3cc0ebc8f3241f91c.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        }
      },
      {
        "title": "Batman Ninja",
        "alternativeTitle": "Ninja Batman",
        "id": "batman-ninja-7371",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b5588c2990b97578ddb3fb0db48baa7.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        }
      },
      {
        "title": "Brynhildr in the Darkness Special",
        "alternativeTitle": "Gokukoku no Brynhildr: Kara Sawagi",
        "id": "brynhildr-in-the-darkness-special-5318",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8bf583eb62e48695c9d2faad0e1a408f.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        }
      },
      {
        "title": "Detonator Orgun",
        "alternativeTitle": "Detonator Orgun",
        "id": "detonator-orgun-5945",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/028da6984167acc92258b245229ad68b.jpg",
        "episodes": {
          "sub": 3,
          "dub": 3,
          "eps": 3
        }
      },
      {
        "title": "Mighty Space Miners",
        "alternativeTitle": "Oira Uchuu no Tankoufu",
        "id": "mighty-space-miners-6646",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/865f29e8e72e69427b5edbe90b6385d8.jpg",
        "episodes": {
          "sub": 2,
          "dub": 2,
          "eps": 2
        }
      },
      {
        "title": "Comic Party Revolution",
        "alternativeTitle": "Comic Party Revolution",
        "id": "comic-party-revolution-5587",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/0f8992c26e9915ec3a3d32e119f1c966.jpg",
        "episodes": {
          "sub": 13,
          "dub": 13,
          "eps": 13
        }
      },
      {
        "title": "Tenshi no Shippo Chu!: Tenshi no Utagoe",
        "alternativeTitle": "Tenshi no Shippo Chu!: Tenshi no Utagoe",
        "id": "tenshi-no-shippo-chu-tenshi-no-utagoe-7840",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bdad86a7bb93e16bec3bcce954c70a39.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      },
      {
        "title": "Tenshi no Shippo Chu!",
        "alternativeTitle": "Tenshi no Shippo Chu!",
        "id": "tenshi-no-shippo-chu-5527",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3160a9b91f62b7b01289f9c98ff76cd7.jpg",
        "episodes": {
          "sub": 10,
          "dub": 0,
          "eps": 11
        }
      },
      {
        "title": "Code Geass: Lelouch of the Rebellion Picture Dramas",
        "alternativeTitle": "Code Geass: Hangyaku no Lelouch Picture Drama",
        "id": "code-geass-lelouch-of-the-rebellion-picture-dramas-3661",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3040784172dd955e22487af4b6d49c20.jpg",
        "episodes": {
          "sub": 9,
          "dub": 9,
          "eps": 9
        }
      },
      {
        "title": "Seihou Tenshi Angel Links: Meifon no Special Kaisetsu Corner",
        "alternativeTitle": "Seihou Tenshi Angel Links: Meifon no Special Kaisetsu Corner",
        "id": "seihou-tenshi-angel-links-meifon-no-special-kaisetsu-corner-9174",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3beaed9edb3803a180414c1a35e7529e.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      }
    ],
    "topUpcoming": [
      {
        "title": "Welcome to Magical Girl Village (Illegally Occupied)",
        "alternativeTitle": "Oide yo Mahou Shoujo Mura (Fuhou Senkyo)",
        "id": "welcome-to-magical-girl-village-illegally-occupied-19649",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2018d92a573a8077463893a0c9daec7a.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      ...
    ],
    "top10": {
      "today": [
        {
          "title": "One Piece",
          "rank": 1,
          "alternativeTitle": "One Piece",
          "id": "one-piece-100",
          "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
          "episodes": {
            "sub": 1130,
            "dub": 1122,
            "eps": 1130
          }
        },
       ...
      ],
      "week": [
        {
          "title": "One Piece",
          "rank": 1,
          "alternativeTitle": "One Piece",
          "id": "one-piece-100",
          "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
          "episodes": {
            "sub": 1130,
            "dub": 1122,
            "eps": 1130
          }
        },
       ...
      ],
      "month": [
        {
          "title": "One Piece",
          "rank": 1,
          "alternativeTitle": "One Piece",
          "id": "one-piece-100",
          "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
          "episodes": {
            "sub": 1130,
            "dub": 1122,
            "eps": 1130
          }
        },
       ...
      ]
    },
    "genres": [
      "action",
      "adventure",
      ...
    ]
  }
}
```

### `GET` Anime List page

#### Endpoint

```sh
/api/v1/animes/{query}/{categpry}?page={page}
```

#### Path Parameters

valid queries

```javascript
 "validateQueries": [
  { "query": "top-airing", "hasCategory": false },
  { "query": "most-popular", "hasCategory": false },
  { "query": "most-favorite", "hasCategory": false },
  { "query": "completed", "hasCategory": false },
  { "query": "recently-added", "hasCategory": false },
  { "query": "recently-updated", "hasCategory": false },
  { "query": "top-upcoming", "hasCategory": false },
  { "query": "genre", "hasCategory": true , "category":"all genres" },
  { "query": "az-list", "hasCategory": true , "category" : "0-9 , all , a-z"  },
  { "query": "subbed-anime", "hasCategory": false },
  { "query": "dubbed-anime", "hasCategory": false },
  { "query": "movie", "hasCategory": false },
  { "query": "tv", "hasCategory": false },
  { "query": "ova", "hasCategory": false },
  { "query": "ona", "hasCategory": false },
  { "query": "special", "hasCategory": false },
  { "query": "events", "hasCategory": false }
]

```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/azlist/0-9?page=1');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "pageInfo": {
      "totalPages": 1,
      "currentPage": 1,
      "hasNextPage": false
    },
    "response": [
      {
        "title": "0 Years Old Child Starting Dash Story Season 2",
        "alternativeTitle": "0-saiji Start Dash Monogatari Season 2",
        "id": "0-years-old-child-starting-dash-story-season-2-19479",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3456bcff1c43aa7b8e291e1df25f7e36.jpg",
        "episodes": {
          "sub": 12,
          "dub": 0,
          "eps": 12
        },
        "type": "TV",
        "duration": "4m"
      },
     ...
    ]
  }
}

```

### `GET` Anime detailed Info

#### Endpoint

```sh
/api/v1/anime/{animeId}
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/anime/attack-on-titan-112');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "title": "Attack on Titan",
    "alternativeTitle": "Shingeki no Kyojin",
    "japanese": "進撃の巨人",
    "id": "attack-on-titan-112",
    "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/debf027d032c6d40b91fab16b2ff9bd4.jpg",
    "rating": "R",
    "type": "TV",
    "episodes": {
      "sub": 25,
      "dub": 25,
      "eps": 25
    },
    "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.\n\n[Written by MAL Rewrite]",
    "synonyms": "AoT",
    "aired": {
      "from": "Apr 7, 2013",
      "to": "Sep 29, 2013"
    },
    "premiered": "Spring 2013",
    "duration": "24m",
    "status": "Finished Airing",
    "MAL_score": "8.52",
    "genres": [
      "Action",
      "Mystery",
      "Drama",
      "Fantasy",
      "Shounen",
      "Super Power",
      "Military"
    ],
    "studios": "Wit Studio",
    "producers": [
      "production-ig",
      "dentsu",
      "mainichi-broadcasting-system",
      "pony-canyon",
      "kodansha",
      "mad-box",
      "pony-canyon-enterprise",
      "wit-studio",
      "funimation"
    ],
    "moreSeasons": [
    ...
    ],
    "related": [
      ...
    ],
    "mostPopular": [
    ...
    ],
    "recommended": [
     ...
    ]
  }
}
```

### `GET` Search Results

#### Endpoint

```sh
/api/v1/search?keyword={query}&page={page}
```

#### Request Sample

```javascript
// basic example
const resp = await fetch('/api/v1/search?keyword=titan&page=1');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "pageInfo": {
      "totalPages": 1,
      "currentPage": 1,
      "hasNextPage": false
    },
    "response": [
      {
        "title": "Attack on Titan: The Last Attack",
        "alternativeTitle": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack",
        "id": "attack-on-titan-the-last-attack-19391?ref=search",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b17cd8c7479d523d77e5e2cbbb5ad67.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        },
        "type": "Movie",
        "duration": "144m"
      },
      ...
    ]
  }
}
```

### `GET` Search Suggestions

#### Endpoint

```sh
/api/v1/search/suggestion?keyword={query}
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/suggestion?keyword=clannad');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": [
    {
      "title": "Clannad: The Movie",
      "alternativeTitle": "Clannad Movie",
      "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/146185b19062e463b04c0b0f88fcbfdb.jpg",
      "id": "clannad-the-movie-2553",
      "aired": "Sep 15, 2007",
      "type": "Movie",
      "duration": "1h 33m"
    },
    {...}
  ]
}
```

### `GET` Anime Episodes

#### Endpoint

```sh
/api/v1/episodes/{animeId}
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/episodes/steins-gate-3');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": [
    {
      "title": "Turning Point",
      "alternativeTitle": "Hajimari to Owari no Prologue",
      "id": "/watch/steinsgate-3?ep=213",
      "isFiller": false
    },
    {...}
  ]
}
```

### `GET` Anime Episode Servers

#### Endpoint

```sh
/api/v1/servers?id={id}
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/episode/servers?id=/watch/steinsgate-3?ep=213');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "episode": 1,
    "sub": [
      {
        "index": 6,
        "type": "sub",
        "id": "1287321",
        "name": "HD-3"
      },
     {...}
    ],
    "dub": [
      {
        "index": 6,
        "type": "dub",
        "id": "1287289",
        "name": "HD-3"
      },
      {...}
    ]
  }
}
```

### `GET` Anime Episode Streaming Links

#### Endpoint

```sh
/api/v1/stream?id={id}?server={server}&type={dub || sub}
```

#### Request Sample

```javascript
const resp = await fetch('/api/v1/stream?server=HD-2&type=dub&id=/watch/steinsgate-3?ep=214');
const data = await resp.json();
console.log(data);
```

#### Response Schema

```javascript
{
  "success": true,
  "data": {
    "streamingLink": {
      "id": "54874",
      "type": "dub",
      "link": {
        "file": "https://ec.netmagcdn.com:2228/hls-playback/a0d0f8e2924e65f09a2b5e477faa188252ad2eaa266fcf18e92282bf909db0f9e0a176e83727deae967a94755dd95cbd3fbd6293020b633ff39a39146c3f1100f3a6fdd0b35f88e98bbd8bf103b7a9b11028a1b7a93decaa2c5e52afa851911598630064817447253230352d3fb736412257fc9d1510ec4d4e9630ea23a426645a519f9651f285ea35a3ca5fe7bea0d2/master.m3u8",
        "type": "hls"
      },
      "tracks": [
        {
          "file": "https://s.megastatics.com/thumbnails/5ab236de532735b635e803cfc4356f31/thumbnails.vtt",
          "kind": "thumbnails"
        }
      ],
      "intro": {
        "start": 75,
        "end": 165
      },
      "outro": {
        "start": 1330,
        "end": 1419
      },
      "server": "HD-2",
      "iframe": "https://megacloud.blog/embed-2/e-1/ggJPRb9r8nPp?k=1"
    },
    "servers": "HD-2"
  }
}
```

## <span id="development">👨‍💻 Development</span>

Pull requests and stars are always welcome. If you encounter any bug or want to add a new feature to this api, consider creating a new [issue](https://github.com/yahyamomin/hianime-API/issues). If you wish to contribute to this project feel free to make pull request

### refer tnis repo to build your frontend

- [watanuki](https://github.com/yahyamomin/watanuki)

## <span id="contributors">✨ Contributors</span>

Thanks to the following people for keeping this project alive and relevant.

[![](https://contrib.rocks/image?repo=yahyamomin/hianime-API)](https://github.com/yahyamomin/hianime-API/graphs/contributors)

## <span id="thanks">🤝 Thanks</span>

- [consumet.ts](https://github.com/consumet/consumet.ts)
- [api.consumet.org](https://github.com/consumet/api.consumet.org)

## <span id="support">🙌 Support</span>

Don't forget to leave a star 🌟.

<br/>

## <span id="star-history">🌟 Star History</span>

<img
  id="star-history" 
  src="https://starchart.cc/yahyamomin/hianime-API.svg?variant=adaptive"
  alt=""
/>
