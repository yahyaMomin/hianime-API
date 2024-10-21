import app from "./src/app";

const server = Bun.serve({
   port: 3030,
   fetch: app.fetch,
});

console.log("server is running on port " + server.port);

const url = "https://hianime.to/watch/one-piece-100?ep=123";

const newUrl = new URL(url.split("?ep=")[0]).href;

console.log(newUrl);
