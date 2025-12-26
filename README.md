# 📺 hianime-API

**hianime-API** is an unofficial REST API that scrapes anime data from **hianimez.to**.  
It provides endpoints for anime discovery, details, episodes, servers, and streaming links.

> ⚠️ **Important**
>
> - This API is **unofficial** and not affiliated with hianimez.to
> - No hosted instance exists — **deploy your own**
> - All content belongs to its original owners
> - This project is for **educational and personal use only**

---

## ✨ Features

- Anime home page data (trending, spotlight, top airing, etc.)
- Anime listings with filters (genre, A–Z, categories)
- Detailed anime information
- Episode lists
- Streaming servers & HLS links
- Search & search suggestions

---

## 💻 Installation

### Prerequisites

- **Bun** (required)

Install Bun → https://bun.sh/docs/installation

---

### Local Setup

```bash
git clone https://github.com/yahyaMomin/hianime-API.git
cd hianime-API
bun install
bun run dev
```

Server runs at:

```
http://localhost:3030
```

now vist /doc for intrective docs

```bash
http://localhost:3030/doc
```

> ⚠️ **Important**
>
> - You Cannot Run this Projct Directly Using Nodemon or node
> - You Need to Build Project using tsup in ESM module To Run Using Node

---

---

### Deploy on Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/yahyaMomin/hianime-API)

---

## 📚 API Documentation

Base URL:

```
/api/v1
```

All responses follow:

```json
{
  "success": true,
  "data": {}
}
```

---

## 🏠 Home Page

```http
GET /home
```

Returns spotlight, trending, top airing, latest episodes, genres, and more.

---

## 📃 Anime List

```http
GET /animes/{query}/{category}?page={page}
```

Supports:

- top-airing
- most-popular
- most-favorite
- completed
- recently-added
- recently-updated
- top-upcoming
- genre
- az-list
- subbed-anime
- dubbed-anime
- movie, tv, ova, ona, special

---

## 🎬 Anime Details

```http
GET /anime/{animeId}
```

Returns full anime metadata, episodes info, related & recommended anime.

---

## 🔍 Search

```http
GET /search?keyword={query}&page={page}
```

### Suggestions

```http
GET /search/suggestion?keyword={query}
```

---

## 📺 Episodes

```http
GET /episodes/{animeId}
```

### Servers

```http
GET /servers?id={episodeId}
```

### Streaming

```http
GET /stream?id={episodeId}&server={server}&type={sub|dub}
```

Returns HLS links, subtitles, intro/outro timestamps.

---

## 👨‍💻 Development & Contribution

- Pull requests welcome
- Open issues for bugs or features

Issues → https://github.com/yahyamomin/hianime-API/issues

---

## 🎨 Frontend Example

Reference frontend:

https://github.com/yahyamomin/watanuki

---

## ✨ Contributors

[![Contributors](https://contrib.rocks/image?repo=yahyamomin/hianime-API)](https://github.com/yahyamomin/hianime-API/graphs/contributors)

---

## 🤝 Credits

- consumet.ts
- api.consumet.org

---

## 🌟 Support

Star the repo if it helped you.

---

## 📈 Star History

![Star History](https://starchart.cc/yahyamomin/hianime-API.svg)
