# ⚡Anime-API⚡

<p align="center">
  <img src="https://skillicons.dev/icons?i=js,bun,hono,docker" />
  <br/>
</p>
<br/><br/>

<break>

## ⚡ Web Scraping Status

# update 
for fetch episodes list, servers and epsiodes please use this repo [this](https://github.com/yahyaMomin/getSources) becouse at current state BUN does not support brotlidecomprasion which is esential for live streaming 

## Index

# for use this api first you have to deploy this project on your server. than replace baseurl to your original server url

# and replace this url `https://hianime-api-production.up.railway.app` with your baseurl

## <span id="hianime">hianime</span>

### `GET` hianime Home Page

#### Endpoint

```url
https://yourBaseurl/api/v1/home
```

#### Request sample

```javascript
const resp = await fetch(
  "yourBaseUrl/api/v1/home"
);
const data = await resp.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
 spotlight 	: [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
trending	: [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
topAiring	: [ {…}, {…}, {…}, {…}, {…} ]
mostPopular	: [ {…}, {…}, {…}, {…}, {…} ]
mostFavorite	: [ {…}, {…}, {…}, {…}, {…} ]
latestCompleted	: [ {…}, {…}, {…}, {…}, {…} ]
latestEpisode	: [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
newAdded	: [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
topUpcoming	: [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
top10 : { today:  […], week: […], month: […] }
genres :	[ "action", "adventure", "cars", "comedy", "dementia", "demons", "drama", "ecchi", "fantasy", "game", … ]
}
```

### `GET` hianime A to Z List Page

#### Endpoint

```url
https://yourbaseurl/api/v1/animes/az-list?page=${page}
```

#### Query Parameters

| Parameter |  Type  |       Description       | Required? | Default |
| :-------: | :----: | :---------------------: | :-------: | :-----: |
|  `page`   | number | Page No. of Search Page |    YES    |    1    |

#### Request sample

```typescript
const resp = await fetch(
  "https://yourbaseurl/api/v1/animes/az-list?page=69"
);
const data = await resp.json();
console.log(data);
```

#### Response Schema

```typescript

"data": {
    "pageInfo": {
      "totalPages": 204,
      "currentPage": 1,
      "hasNextPage": true
    },
    "response": [
      {
        "title": "JX Online 3: The Adventure of Shen Jianxin 3rd Season",
        "alternativeTitle": "",
        "id": "jx-online-3-the-adventure-of-shen-jianxin-3rd-season-19064",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/78f933c4c60b9fb90b33af2303bb7129.jpg",
        "episodes": {
          "sub": 11,
          "dub": 0,
          "eps": 11
        },
        "type": "TV",
        "duration": "5m"
      },
      {
        "title": "\"Bungaku Shoujo\" Kyou no Oyatsu: Hatsukoi",
        "alternativeTitle": "\"Bungaku Shoujo\" Kyou no Oyatsu: Hatsukoi",
        "id": "bungaku-shoujo-kyou-no-oyatsu-hatsukoi-3885",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/59ce9282ff53efcd1777584ee1a06579.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        },
        "type": "OVA",
        "duration": "15m"
      },
       {...},
}
    ]
```

### `GET` Anime About Info

#### Endpoint

```sh
https://hianime-api-production.up.railway.app/api/v1/anime/:id
```

#### Query Parameters

| Parameter |  Type  |     Description     | Required? | Default |
| :-------: | :----: | :-----------------: | :-------: | :-----: |
|   `id`    | string | The unique Anime ID |    YES    |  -----  |

> [!NOTE]
> Anime ID should be In <kbd><b>Kebab Case</b></kbd>

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/anime/one-piece-100"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "title": "One Piece",
    "alternativeTitle": "One Piece",
    "japanese": "ONE PIECE",
    "id": "one-piece-100",
    "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
    "rating": "PG-13",
    "type": "TV",
    "episodes": {
      "sub": 1122,
      "dub": 1096,
      "eps": 1122
    },
    "synopsis": "Gold Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n\n[Written by MAL Rewrite]",
    "synonyms": "OP",
    "aired": {
      "from": "Oct 20, 1999",
      "to": null
    },
    "premiered": "Fall 1999",
    "duration": "24m",
    "status": "Currently Airing",
    "MAL_score": "8.62",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Shounen",
      "Super Power"
    ],
    "studios": "Toei Animation",
    "producers": [
      "fuji-tv",
      "tap",
      "shueisha",
      "toei-animation",
      "funimation",
      "4kids-entertainment"
    ]
  }
}
```

### `GET` Search Anime

#### Endpoint

```sh
https://hianime-api-production.up.railway.app/api/v1/search?keyword={}&page={}
```

#### Query Parameters

| Parameter |  Type  |       Description       | Required? | Default |
| :-------: | :----: | :---------------------: | :-------: | :-----: |
|  `query`  | string | Search Query for Anime  |    YES    |  -----  |
|  `page`   | number | Page No. of Search Page |    YES    |    1    |

> [!NOTE]
>
> <div>Search Query should be In <kbd><b>Kebab Case</b></kbd></div>
> <div>Page No should be a <kbd><b>Number</b></kbd></b></div>

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/search?keyword=one+piece&page=1"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "pageInfo": {
      "totalPages": 3,
      "currentPage": 1,
      "hasNextPage": true
    },
    "response": [
      {
        "title": "One Piece Movie 1",
        "alternativeTitle": "One Piece Movie 1",
        "id": "one-piece-movie-1-3096?ref=search",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ff736656ba002e0dd51363c3d889d9ff.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        },
        "type": "Movie",
        "duration": "50m"
      },
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100?ref=search",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "episodes": {
          "sub": 1122,
          "dub": 1096,
          "eps": 1122
        },
        "type": "TV",
        "duration": "24m"
      },
  }
```

### `GET` Category Anime

#### Endpoint

```sh
https://hianime-api-production.up.railway.app/api/v1/:query/:category?page=$(page)
```

#### Query Parameters

| Parameter  |  Type  |       Description       | Required? | Default |
| :--------: | :----: | :---------------------: | :-------: | :-----: |
|  `query`   | string | Search Query for Anime  |    YES    |  -----  |
| `category` | string | Search Query for Anime  |    NO     |  -----  |
|   `page`   | number | Page No. of Search Page |    YES    |    1    |

<break>

## category is required for genres

> [!NOTE]
>
> <div>category should be In <kbd><b>Kebab Case</b></kbd></div>
> <div>Page No should be a <kbd><b>Number</b></kbd></b></div>

<break>
  
> [!TIP]
> Add type to Category -
 "subbed-anime" |
 "dubbed-anime"|
  "top-airing" |
    "top-airing" |
         "most-popular" |
         "most-favorite" |
         "completed"|
         "recently-added"|
         "recently-updated"|
         "top-upcoming"|
         "genre",
         "az-list" |
          "tv" |
           "movie" |
             "top-airing" |
              "ova" |
               "ona" |
                "special" |
                 "events";

<break>

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/genres/action?page=1"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "pageInfo": {
      "totalPages": 86,
      "currentPage": 1,
      "hasNextPage": true
    },
    "response": [
      {
        "title": "Jungle no Ouja Taa-chan",
        "alternativeTitle": "Jungle no Ouja Taa-chan",
        "id": "jungle-no-ouja-taa-chan-3446",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/fb2379d1623b8592f691c760520419dc.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 50
        },
        "type": "TV",
        "duration": "24m"
      },
      {...}
  ]
  }
```

### `GET` Anime Episodes

#### Endpoint

```sh
https://hianime-api-production.up.railway.app/api/v1/episodes/:id
```

#### Query Parameters

| Parameter |  Type  | Description | Required? | Default |
| :-------: | :----: | :---------: | :-------: | :-----: |
|   `id`    | string |  Anime ID   |    YES    |  -----  |

<break>

> [!NOTE]
>
> <div>Anime ID should be In <kbd><b>Kebab Case</b></kbd></div>

<break>

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/episodes/one-piece-100"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "totalEpisodes": number,
  "episodes": [
     {
      "title": "When I Met You in This World, You Were...",
      "alternativeTitle": "Konna Sekai de Deaeta Kimi wa",
      "episodeNumber": 1,
      "episodeId": "/watch/seirei-gensouki-spirit-chronicles-season-2-19320?ep=128493",
      "isFiller": false
    },
      {...},
  ]
}
```

### `GET` Anime Episodes Servers

#### Endpoint

```sh
https://hianime-api-production.up.railway.app/api/v1/servers?episodeId=${id}
```

#### Query Parameters

|  Parameter  |  Type  | Description | Required? | Default |
| :---------: | :----: | :---------: | :-------: | :-----: |
| `episodeId` | string | Episode ID  |    YES    |  -----  |

<break>

> [!NOTE]
>
> <div>Episode ID should be In <kbd><b>Kebab Case</b></kbd></div>

important

> [!NOTE]
>
> <div><kbd><b>id</b></kbd> is a combination of AnimeId and EpisodeId</div>

eg.

```bash
one-piece-100?ep=84802
```

<break>

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/servers?episodeId=one-piece-100?ep=84802"
);
const data = await res.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "episode": 1,
    "sub": [
      {
        "index": 4,
        "type": "sub",
        "id": "1128341",
        "name": "HD-1"
      },
      {
        "index": 1,
        "type": "sub",
        "id": "1128339",
        "name": "HD-2"
      }
    ],
    "dub": [
      {
        "index": 4,
        "type": "dub",
        "id": "1128367",
        "name": "HD-1"
      },
      {
        "index": 1,
        "type": "dub",
        "id": "1128354",
        "name": "HD-2"
      }
    ]
  }
}
```

### `GET` Anime Episode Streaming Source Links

#### Endpoint

```sh
https://api-anime-rouge.vercel.app/anime/sources?episodeId={episodeId}&server={server}&audio={audio}
```

#### Query Parameters

| Parameter |  Type  |                  Description                  | Required? | Default |
| :-------: | :----: | :-------------------------------------------: | :-------: | :-----: |
|   `id`    | string |                  episode Id                   |    Yes    |   --    |
| `server`  | string |                 server name.                  |    No     |   `4`   |
|  `audio`  | string | The category of the episode ('sub' or 'dub'). |    No     | `"sub"` |

#### Request sample

```javascript
const resp = await fetch(
  "https://hianime-api-production.up.railway.app/api/v1/sources?episodeId=solo-leveling-18718?ep=120094&server=4&audio=sub"
);
const data = await resp.json();
console.log(data);
```

> [!CAUTION]
> decryption key changes frequently ..., it sometime may not work

<break>
  
#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "tracks": [
      {
        "file": "https://s.megastatics.com/subtitle/9acd96de0ae7133cb71eccfe7fecd325/eng-2.vtt",
        "label": "English",
        "kind": "captions",
        "default": true
      },
      {
        "file": "https://s.megastatics.com/subtitle/9acd96de0ae7133cb71eccfe7fecd325/ind-3.vtt",
        "label": "Indonesian",
        "kind": "captions"
      },
      {
        "file": "https://s.megastatics.com/subtitle/9acd96de0ae7133cb71eccfe7fecd325/tha-4.vtt",
        "label": "Thai",
        "kind": "captions"
      },
      {
        "file": "https://s.megastatics.com/thumbnails/94abd7f75b4e1b36b770a2cee80dccc2/thumbnails.vtt",
        "kind": "thumbnails"
      }
    ],
    "intro": {
      "start": 198,
      "end": 287
    },
    "outro": {
      "start": 1330,
      "end": 1419
    },
    "sources": [
      {
        "url": "https://fgh5.biananset.net/_v7/63d6e9510a89514dca93cc5ce5d98c3b0043d99fe9acc134e36b58cbda9a6c351f92c979bb9d722ae9b3e0724ca6afd03c096d757bfa87ce610ef3fad0fede98c23e0e39eab885bfd375d69dc66966138cf70590e8e3bb3ee8195a08d94344918dc6848489302ae6dc112c11e0194995cda315b918e8b84deaa9bfa34d91f702/master.m3u8",
        "type": "hls"
      }
    ]
  }
}
```

<break>

<break>
#############################################################################

## <span>🖱️ For Front End</span>

> [!TIP]
> Kindly use this repo to make Front End

- [Eltik / Anify](https://github.com/Eltik/Anify)

#############################################################################

## <span>🤝 Thanks ❤️</span>

- [consumet.ts](https://github.com/consumet/consumet.ts)
- [ghoshRitesh12](https://github.com/ghoshRitesh12)
