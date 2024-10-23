# ⚡Anime-API⚡

<p align="center">
  <img src="https://skillicons.dev/icons?i=js,bun,hono,docker" />
  <br/>
  <a href="https://api-anime-rouge.vercel.app"><kbd>api-anime-rouge.vercel.app</kbd></a>
</p>
<br/><br/>

Check it out at <a href="https://api-anime-rouge.vercel.app"><kbd>api-anime-rouge.vercel.app</kbd></a>.

<break>

## ⚡ Web Scraping Status

| Anime Websites | STATUS               |
| -------------- | -------------------- |
| hianime        | <b>DONE</b>          |
| hiddenLeaf     | <b>WORKING ON IT</b> |

> [!NOTE]
> More Websites Will be Added in Future

## Index

-  [hianime](#hianime)
<!-- - [GogoAnime](#gogoanime) -->

## <span id="hianime">hianime</span>

### `GET` hianime Home Page

#### Endpoint

```url
https://api-anime-rouge.vercel.app/hianime/home
```

#### Request sample

```javascript
const resp = await fetch("https://api-anime-rouge.vercel.app/hianime/home");
const data = await resp.json();
console.log(data);
```

#### Response Schema

```typescript
{
  "status": true,
  "data": {
    "spotlight": [
      {
        "title": "The Elusive Samurai",
        "alternativeTitle": "Nige Jouzu no Wakagimi",
        "id": "the-elusive-samurai-19233",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/6b1b090ae52f90441f0e7ed720e86291.jpg",
        "rank": 1,
        "type": "TV",
        "quality": "HD",
        "duration": "23m",
        "aired": "Jul 6, 2024",
        "synopsis": "Eight-year-old Tokiyuki Houjou, the next successor of the Kamakura shogunate, is a young boy lacking talent in everything besides hide-and-seek. One day, his carefree life is abruptly turned upside down when Takauji Ashikaga brutally seizes power from the Kamakuras, ending their reign. Rescued by a self-proclaimed prophetic priest, Tokiyuki manages to escape with his life. Now he must evade those trying to kill him while recruiting comrades who can help him restore the Kamakura Shogunate to its former glory.  Set during the Nanboku-chou period of Japanese history, is a tale of redemption, documenting the life of the forgotten hero that altered Japan's destiny by running away.",
        "episodes": {
          "sub": 12,
          "dub": 11,
          "eps": 12
        }
      },
      {
        "title": "Ranma 1/2",
        "alternativeTitle": "Ranma ½ (2024)",
        "id": "ranma-1-2-19335",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/af1c058948079aabe09de052cc7b4261.jpg",
        "rank": 2,
        "type": "TV",
        "quality": "HD",
        "duration": "23m",
        "aired": "Oct 6, 2024",
        "synopsis": "Soun Tendou runs the Tendou Martial Arts School accompanied by his three daughters: Akane, Nabiki, and Kasumi. One day, the sisters' lives are turned upside down when their father announces that he has promised one of them to be married to a fellow martial artist's son in hopes of carrying on the family legacy. In addition to their mixed reactions, when the fiancé arrives, the last thing the Tendou family expects is Ranma Saotome and his father, Genma.  Ranma has been training in China with his father until an unfortunate accident changed them both. Now, when water touches them, Ranma turns into a girl and Genma into a giant panda. Ranma ½ follows Ranma as he attempts to get along with his newly betrothed, the youngest of the Tendou sisters, Akane. As the two begin to attend the same school, they deal with fellow friends and rivals, all of whom have something to say about their engagement.  [Written by MAL Rewrite]",
        "episodes": {
          "sub": 3,
          "dub": 2,
          "eps": 3
        }
      },
      {
        "title": "No Longer Allowed In Another World",
        "alternativeTitle": "Isekai Shikkaku",
        "id": "no-longer-allowed-in-another-world-19247",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/1a37292bd09836d9fc282e6a79080979.jpg",
        "rank": 3,
        "type": "TV",
        "quality": "HD",
        "duration": "23m",
        "aired": "Jul 9, 2024",
        "synopsis": "An adventure in another world with cute girls by your side and video game-like powers—sounds like an anime fan's dream, right? Not so for melancholic author Osamu Dazai, who would quite literally prefer to drop dead. Video games haven't even been invented yet when he gets yanked into another world in 1948. Really, all the fantastical adventure he keeps running into is just getting in the way of his poetic dream of finding the perfect place to die. But no matter how much he risks his hide, everything seems to keep turning out okay. Follow a miserable hero like no other in this cheerfully bleak isekai comedy!",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      },
      {
        "title": "Why Does Nobody Remember Me in This World?",
        "alternativeTitle": "Naze Boku no Sekai wo Daremo Oboeteinai no ka?",
        "id": "why-does-nobody-remember-me-in-this-world-19240",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/d057bc74b98214c7fd9ca6192aa3ce50.jpg",
        "rank": 4,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Jul 13, 2024",
        "synopsis": "In a time when the great war between five rival races for supremacy on Earth ended with humanity's victory led by the hero Sid, the world suddenly gets \"overwritten\" right before the eyes of a boy named Kai. In this rewritten world, Kai witnesses humanity's defeat in the war as a result of Sid's absence—where dragons and demons now rule the land, and Kai himself has become a forgotten existence to all humans. However, after encountering the mysterious girl Rinne, Kai resolves to break free from this rewritten fate. In a world without a hero, he inherits the sword and martial skills of the hero (Sid) and challenges the powerful enemy races that dominate the land.",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      },
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/db8603d2f4fa78e1c42f6cf829030a18.jpg",
        "rank": 5,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Oct 20, 1999",
        "synopsis": "Gold Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n\n[Written by MAL Rewrite]",
        "episodes": {
          "sub": 1122,
          "dub": 1096,
          "eps": 1122
        }
      },
      {
        "title": "The Strongest Magician in the Demon Lord's Army Was a Human",
        "alternativeTitle": "Maougun Saikyou no Majutsushi wa Ningen datta",
        "id": "the-strongest-magician-in-the-demon-lords-army-was-a-human-19238",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/1d12830ba58fe5e45677b800ff71afe5.jpg",
        "rank": 6,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Jul 3, 2024",
        "synopsis": "Under the tutelage of the great demon warlock Romberg, Ike grew up with knowledge regarding an ancient advanced civilization that once ruled the land. Coupled with his innate talent in magical arts, this upbringing allows Ike to quickly rise in the Demon Lord's army ranks, leading his brigade to consecutive victories against humans.\n\nHowever, Ike has a secret—he is a human himself. Despite knowing all too well the consequences if this information is ever to leak, Ike is willing to face such immense danger to achieve his goal: find a way for humans and demons to coexist and stop the war that has been carried on for far too long.",
        "episodes": {
          "sub": 12,
          "dub": 0,
          "eps": 12
        }
      },
      {
        "title": "Pseudo Harem",
        "alternativeTitle": "Giji Harem",
        "id": "pseudo-harem-19246",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/8316ad233cd5b69d864064c84f8ca9f5.jpg",
        "rank": 7,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Jul 5, 2024",
        "synopsis": "Eiji Kitahama, a second year high school student, just wants to be popular. To help him realize this dream, Rin Nanakura, his junior in the drama club, uses her acting skills to create a harem of loving girls for him. Though the various \"girls\" all show fondness toward Eiji, the affection of the actress behind them is very real. Rin's colorful acting continuously delights Eiji, but will the starlet herself ever make her way into his heart?",
        "episodes": {
          "sub": 12,
          "dub": 0,
          "eps": 12
        }
      },
      {
        "title": "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
        "alternativeTitle": "Kimetsu no Yaiba: Hashira Geiko-hen",
        "id": "demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/46d8e6d3fcd4a016ff5e90f0281eae76.jpg",
        "rank": 8,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "May 12, 2024",
        "synopsis": "Adaptation of the Hashira Training Arc.\n\nThe Hashira, the Demon Slayer Corps' highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and hopes held in their hearts, a new story for Tanjiro and the Hashira begins.",
        "episodes": {
          "sub": 8,
          "dub": 8,
          "eps": 8
        }
      },
      {
        "title": "Wind Breaker",
        "alternativeTitle": "Wind Breaker",
        "id": "wind-breaker-19136",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/b8b1bbc386d81a95c40e236089e11312.jpg",
        "rank": 9,
        "type": "TV",
        "quality": "HD",
        "duration": "23m",
        "aired": "Apr 5, 2024",
        "synopsis": "From an early age, Haruka Sakura was made an outcast due to his unconventional appearance and lack of social skills. However, the rough treatment turned him into a proficient fighter, which is now the only thing he prides himself on. Starting at Furin High School, where it is rumored that strength is valued over academics, Sakura has only one goal—taking the top spot.\n\nInvolved in a street brawl the day before his enrollment, Sakura happens to meet a group of his future schoolmates. Instead of the usual rejection, they fight alongside him, demonstrating that what the school actually cares about is protecting the town of Makochi from any harm—hence why the students call themselves \"Bofurin.\" Surprised by the support and appreciation of the townspeople, Sakura has a hard time accepting their goodwill.\n\nThough unfamiliar with kindness being shown to him, Sakura must learn to push past his discomfort when Bofurin is pitted against formidable enemies. After experiencing the feeling of acceptance, he finds himself fighting for the sake of others for the first time.",
        "episodes": {
          "sub": 13,
          "dub": 13,
          "eps": 13
        }
      },
      {
        "title": "Bleach",
        "alternativeTitle": "Bleach",
        "id": "bleach-806",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/58d0b99666b285d2c484fec5dfaa23f0.jpg",
        "rank": 10,
        "type": "TV",
        "quality": "HD",
        "duration": "24m",
        "aired": "Oct 5, 2004",
        "synopsis": "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\n\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.\n\n[Written by MAL Rewrite]",
        "episodes": {
          "sub": 366,
          "dub": 366,
          "eps": 366
        }
      }
    ],
    "trending": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "rank": 1,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "id": "one-piece-100"
      },
      {
        "title": "Dandadan",
        "alternativeTitle": "Dandadan",
        "rank": 2,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a8b56a7589ff9edb6c86977c31e27a06.jpg",
        "id": "dandadan-19319"
      },
      {
        "title": "Blue Lock Season 2",
        "alternativeTitle": "Blue Lock vs. U-20 Japan",
        "rank": 3,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg",
        "id": "blue-lock-season-2-19318"
      },
      {
        "title": "Blue Box",
        "alternativeTitle": "Ao no Hako",
        "rank": 4,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5f112b1c1f3f41ed87de0c48b6cf4e0d.jpg",
        "id": "blue-box-19326"
      },
      {
        "title": "Bleach: Thousand-Year Blood War - The Conflict",
        "alternativeTitle": "Bleach: Sennen Kessen-hen - Soukoku-tan",
        "rank": 5,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b87a9e986e6e403ffddb520d24f5040a.jpg",
        "id": "bleach-thousand-year-blood-war-the-conflict-19322"
      },
      {
        "title": "Rurouni Kenshin -Kyoto Disturbance-",
        "alternativeTitle": "Rurouni Kenshin: Meiji Kenkaku Romantan - Kyoto Douran",
        "rank": 6,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4c339e5c8107dbda621c214e351f7164.jpg",
        "id": "rurouni-kenshin-kyoto-disturbance-19340"
      },
      {
        "title": "Re:ZERO -Starting Life in Another World- Season 3",
        "alternativeTitle": "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
        "rank": 7,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/fd9a4794949c53baa8ef6ae16f78c7ab.jpg",
        "id": "rezero-starting-life-in-another-world-season-3-19301"
      },
      {
        "title": "My Star: Season 2",
        "alternativeTitle": "Oshi no Ko 2nd Season",
        "rank": 8,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2d1cb3f0d6a5eea02851ea80f515b984.jpg",
        "id": "my-star-season-2-19256"
      },
      {
        "title": "Wind Breaker",
        "alternativeTitle": "Wind Breaker",
        "rank": 9,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        "id": "wind-breaker-19136"
      },
      {
        "title": "Good Bye, Dragon Life.",
        "alternativeTitle": "Sayounara Ryuusei, Konnichiwa Jinsei",
        "rank": 10,
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6431fdac6396ff285bf3c69b807a8a9a.jpg",
        "id": "good-bye-dragon-life-19347"
      }
    ],
    "topAiring": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1122,
          "dub": 1096,
          "eps": 1122
        }
      },
      {
        "title": "Case Closed",
        "alternativeTitle": "Detective Conan",
        "id": "case-closed-323",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3b185ed9d10aa300bb0cb7fc35b84999.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1139,
          "dub": 123,
          "eps": 1139
        }
      },
      {
        "title": "No Longer Allowed In Another World",
        "alternativeTitle": "Isekai Shikkaku",
        "id": "no-longer-allowed-in-another-world-19247",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8b97e75f9de748632c4458eefb3ec8d8.jpg",
        "type": "TV",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      },
      {
        "title": "Bleach: Thousand-Year Blood War - The Conflict",
        "alternativeTitle": "Bleach: Sennen Kessen-hen - Soukoku-tan",
        "id": "bleach-thousand-year-blood-war-the-conflict-19322",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b87a9e986e6e403ffddb520d24f5040a.jpg",
        "type": "TV",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 3
        }
      },
      {
        "title": "Blue Lock Season 2",
        "alternativeTitle": "Blue Lock vs. U-20 Japan",
        "id": "blue-lock-season-2-19318",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8ed3a4df2e8f22be9916959c96e5e3e2.jpg",
        "type": "TV",
        "episodes": {
          "sub": 3,
          "dub": 1,
          "eps": 14
        }
      }
    ],
    "mostPopular": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1122,
          "dub": 1096,
          "eps": 1122
        }
      },
      {
        "title": "Naruto: Shippuden",
        "alternativeTitle": "Naruto: Shippuuden",
        "id": "naruto-shippuden-355",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbcf87f54194742e7686119089478f8.jpg",
        "type": "TV",
        "episodes": {
          "sub": 500,
          "dub": 500,
          "eps": 500
        }
      },
      {
        "title": "Bleach",
        "alternativeTitle": "Bleach",
        "id": "bleach-806",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bd5ae1d387a59c5abcf5e1a6a616728c.jpg",
        "type": "TV",
        "episodes": {
          "sub": 366,
          "dub": 366,
          "eps": 366
        }
      },
      {
        "title": "Jujutsu Kaisen 2nd Season",
        "alternativeTitle": "Jujutsu Kaisen 2nd Season",
        "id": "jujutsu-kaisen-2nd-season-18413",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b51f863b05f30576cf9d85fa9b911bb5.png",
        "type": "TV",
        "episodes": {
          "sub": 23,
          "dub": 23,
          "eps": 23
        }
      },
      {
        "title": "Black Clover",
        "alternativeTitle": "Black Clover",
        "id": "black-clover-2404",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
        "type": "TV",
        "episodes": {
          "sub": 170,
          "dub": 170,
          "eps": 170
        }
      }
    ],
    "mostFavorite": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "type": "TV",
        "episodes": {
          "sub": 1122,
          "dub": 1096,
          "eps": 1122
        }
      },
      {
        "title": "Chainsaw Man",
        "alternativeTitle": "Chainsaw Man",
        "id": "chainsaw-man-17406",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg",
        "type": "TV",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      },
      {
        "title": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
        "alternativeTitle": "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        "id": "demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/db2f3ce7b9cab7fdc160b005bffb899a.png",
        "type": "TV",
        "episodes": {
          "sub": 11,
          "dub": 11,
          "eps": 11
        }
      },
      {
        "title": "Jujutsu Kaisen (TV)",
        "alternativeTitle": "Jujutsu Kaisen (TV)",
        "id": "jujutsu-kaisen-tv-534",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/82402f796b7d84d7071ab1e03ff7747a.jpg",
        "type": "TV",
        "episodes": {
          "sub": 24,
          "dub": 24,
          "eps": 24
        }
      },
      {
        "title": "Black Clover",
        "alternativeTitle": "Black Clover",
        "id": "black-clover-2404",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
        "type": "TV",
        "episodes": {
          "sub": 170,
          "dub": 170,
          "eps": 170
        }
      }
    ],
    "latestCompleted": [
      {
        "title": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "alternativeTitle": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "id": "dorami-chan-wow-the-kid-gang-of-bandits-13458",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af88c5ee982c019b3458d430b9810c43.jpg",
        "type": "Movie",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      },
      {
        "title": "Level 1 Demon Lord and One Room Hero",
        "alternativeTitle": "Lv1 Maou to One Room Yuusha",
        "id": "level-1-demon-lord-and-one-room-hero-18465",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/40a75a631e0c29da6d093d4e089a11d0.jpg",
        "type": "TV",
        "episodes": {
          "sub": 12,
          "dub": 10,
          "eps": 12
        }
      },
      {
        "title": "Jellyfish Can't Swim in the Night",
        "alternativeTitle": "Yoru no Kurage wa Oyogenai",
        "id": "jellyfish-cant-swim-in-the-night-19124",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/c068a9c8c27a61e66171aecf814868b4.jpg",
        "type": "TV",
        "episodes": {
          "sub": 12,
          "dub": 6,
          "eps": 12
        }
      },
      {
        "title": "Mission: Yozakura Family",
        "alternativeTitle": "Yozakura-san Chi no Daisakusen",
        "id": "mission-yozakura-family-19133",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/259ca4ad41fd80081677b04a880c7d4b.jpg",
        "type": "TV",
        "episodes": {
          "sub": 27,
          "dub": 18,
          "eps": 27
        }
      },
      {
        "title": "Uzumaki: Spiral into Horror",
        "alternativeTitle": "Uzumaki",
        "id": "uzumaki-spiral-into-horror-15600",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/31391cad058098cf6a14359829468bea.jpg",
        "type": "TV",
        "episodes": {
          "sub": 4,
          "dub": 4,
          "eps": 4
        }
      }
    ],
    "latestEpisode": [
      {
        "title": "Murai in Love",
        "alternativeTitle": "Murai no Koi",
        "id": "murai-in-love-19314",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8fb9359fcc5247ad916f47c6762ff187.jpg",
        "episodes": {
          "sub": 8,
          "dub": 0,
          "eps": 23
        }
      },
      {
        "title": "A Herbivorous Dragon of 5,000 Years Gets Unfairly Villainized 2nd Season",
        "alternativeTitle": "Shi Cao Lao Long Bei Guan Yi E Long Zhi Ming 2nd Season",
        "id": "a-herbivorous-dragon-of-5000-years-gets-unfairly-villainized-2nd-season-19367",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2f5abb230576afc9894520bd66de30b5.jpg",
        "episodes": {
          "sub": 5,
          "dub": 0,
          "eps": 12
        }
      },
      {
        "title": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "alternativeTitle": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "id": "dorami-chan-wow-the-kid-gang-of-bandits-13458",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af88c5ee982c019b3458d430b9810c43.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      },
      {
        "title": "Haigakura",
        "alternativeTitle": "Haigakura",
        "id": "haigakura-19361",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/c31d079ae74568b981d4168ef478dfa4.jpg",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 13
        }
      },
      {
        "title": "Tasuketsu -Fate of the Majority-",
        "alternativeTitle": "Tasuuketsu",
        "id": "tasuketsu-fate-of-the-majority-19211",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2455f210a0091e001c691a01c88b250a.jpg",
        "episodes": {
          "sub": 15,
          "dub": 0,
          "eps": 15
        }
      },
      {
        "title": "I’ll Become a Villainess Who Goes Down in History",
        "alternativeTitle": "Rekishi ni Nokoru Akujo ni Naru zo",
        "id": "ill-become-a-villainess-who-goes-down-in-history-19334",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/4903e6baa10f5daa8b8ee25fb5eea368.jpg",
        "episodes": {
          "sub": 4,
          "dub": 2,
          "eps": 13
        }
      },
      {
        "title": "Tying the Knot with an Amagami Sister",
        "alternativeTitle": "Amagami-san Chi no Enmusubi",
        "id": "tying-the-knot-with-an-amagami-sister-19338",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5d4d7947b9128d0ae18ddd90b5f6faf8.jpg",
        "episodes": {
          "sub": 4,
          "dub": 2,
          "eps": 24
        }
      },
      {
        "title": "A Terrified Teacher at Ghoul School",
        "alternativeTitle": "Youkai Gakkou no Sensei Hajimemashita!",
        "id": "a-terrified-teacher-at-ghoul-school-19359",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b205ad96b49e6c14e887770605b73732.jpg",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 24
        }
      },
      {
        "title": "My Heroic Husband 2nd Season",
        "alternativeTitle": "Zhui Xu 2nd Season",
        "id": "my-heroic-husband-2nd-season-19267",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f757071d38e1e8ba67a8fee0235c14f7.jpg",
        "episodes": {
          "sub": 14,
          "dub": 0,
          "eps": 16
        }
      },
      {
        "title": "Neko ni Tensei shita Ojisan",
        "alternativeTitle": "Neko ni Tensei shita Ojisan",
        "id": "neko-ni-tensei-shita-ojisan-19375",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbdef8e800f8a96f6574475a2972d98.jpg",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 3
        }
      },
      {
        "title": "Love Live! Superstar!! 3rd Season",
        "alternativeTitle": "Love Live! Superstar!! 3rd Season",
        "id": "love-live-superstar-3rd-season-19352",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/63b1d4a89b20d9b1a1c5a11e068ce44e.jpg",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 3
        }
      },
      {
        "title": "Punirunes 2",
        "alternativeTitle": "Punirunes 2",
        "id": "punirunes-2-19381",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/096541ee8c163d40ec232af6988360d5.jpg",
        "episodes": {
          "sub": 3,
          "dub": 0,
          "eps": 3
        }
      }
    ],
    "newAdded": [
      {
        "title": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "alternativeTitle": "Dorami-chan: Wow, The Kid Gang of Bandits",
        "id": "dorami-chan-wow-the-kid-gang-of-bandits-13458",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af88c5ee982c019b3458d430b9810c43.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      },
      {
        "title": "Level 1 Demon Lord and One Room Hero",
        "alternativeTitle": "Lv1 Maou to One Room Yuusha",
        "id": "level-1-demon-lord-and-one-room-hero-18465",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/40a75a631e0c29da6d093d4e089a11d0.jpg",
        "episodes": {
          "sub": 12,
          "dub": 10,
          "eps": 12
        }
      },
      {
        "title": "Jellyfish Can't Swim in the Night",
        "alternativeTitle": "Yoru no Kurage wa Oyogenai",
        "id": "jellyfish-cant-swim-in-the-night-19124",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/c068a9c8c27a61e66171aecf814868b4.jpg",
        "episodes": {
          "sub": 12,
          "dub": 6,
          "eps": 12
        }
      },
      {
        "title": "Mission: Yozakura Family",
        "alternativeTitle": "Yozakura-san Chi no Daisakusen",
        "id": "mission-yozakura-family-19133",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/259ca4ad41fd80081677b04a880c7d4b.jpg",
        "episodes": {
          "sub": 27,
          "dub": 18,
          "eps": 27
        }
      },
      {
        "title": "Uzumaki: Spiral into Horror",
        "alternativeTitle": "Uzumaki",
        "id": "uzumaki-spiral-into-horror-15600",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/31391cad058098cf6a14359829468bea.jpg",
        "episodes": {
          "sub": 4,
          "dub": 4,
          "eps": 4
        }
      },
      {
        "title": "One Piece Fan Letter",
        "alternativeTitle": "One Piece Fan Letter",
        "id": "one-piece-fan-letter-19406",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/08367d0a68b3952cb14a1e72b84aaae3.jpg",
        "episodes": {
          "sub": 1,
          "dub": 0,
          "eps": 1
        }
      },
      {
        "title": "My Hero Academia Season 7",
        "alternativeTitle": "Boku no Hero Academia 7th Season",
        "id": "my-hero-academia-season-7-19146",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        "episodes": {
          "sub": 21,
          "dub": 20,
          "eps": 21
        }
      },
      {
        "title": "The Elusive Samurai",
        "alternativeTitle": "Nige Jouzu no Wakagimi",
        "id": "the-elusive-samurai-19233",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9ec60e43741263113cd1287467162fb5.jpg",
        "episodes": {
          "sub": 12,
          "dub": 11,
          "eps": 12
        }
      },
      {
        "title": "Blue Lock: Episode Nagi",
        "alternativeTitle": "Blue Lock: Episode Nagi",
        "id": "blue-lock-episode-nagi-19085",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/97a276237c3dce81b62af1565488fd37.jpg",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        }
      },
      {
        "title": "NieR:Automata Ver1.1a (Cour 2)",
        "alternativeTitle": "NieR:Automata Ver1.1a Part 2",
        "id": "nierautomata-ver11a-cour-2-19248",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ce34646da62ed8504ae5199cd1e94f25.jpg",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      },
      {
        "title": "I Parry Everything",
        "alternativeTitle": "Ore wa Subete wo \"Parry\" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai",
        "id": "i-parry-everything-19229",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/009a25ddb8db9e068e16effd7e93f30e.jpg",
        "episodes": {
          "sub": 12,
          "dub": 8,
          "eps": 12
        }
      },
      {
        "title": "Mobile Suit Gundam: Requiem for Vengeance",
        "alternativeTitle": "Kidou Senshi Gundam: Fukushuu no Requiem",
        "id": "mobile-suit-gundam-requiem-for-vengeance-19386",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/e9c7b065fcab7e02f14e6995b9bd836d.jpg",
        "episodes": {
          "sub": 6,
          "dub": 6,
          "eps": 6
        }
      }
    ],
    "topUpcoming": [
      {
        "title": "Murder Mystery of the Dead",
        "alternativeTitle": "Murder Mystery of the Dead",
        "id": "murder-mystery-of-the-dead-19405",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/09fa617c39f5153931af9812fc176154.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "One Piece Log: Fish-Man Island Saga",
        "alternativeTitle": "One Piece: Gyojin Tou-hen",
        "id": "one-piece-log-fish-man-island-saga-19404",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/65eebbb906e8dab6e9efc4bf096db3fb.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Kagaku x Bouken Survival!",
        "alternativeTitle": "Kagaku x Bouken Survival!",
        "id": "kagaku-x-bouken-survival-19376",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8b3e7ca7f1d6623e986a2ab3cca5c6e6.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Genjitsu no Yohane: Sunshine in the Mirror Movie",
        "alternativeTitle": "Genjitsu no Yohane: Sunshine in the Mirror Movie",
        "id": "genjitsu-no-yohane-sunshine-in-the-mirror-movie-19394",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8a0202e79a2d40bd1ba19187693fce46.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Give It All",
        "alternativeTitle": "Ganbatte Ikimasshoi",
        "id": "give-it-all-19393",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5919c430ae29ebb7ff9175043fc2b66c.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Solo Leveling: ReAwakening",
        "alternativeTitle": "Ore dake Level Up na Ken: ReAwakening",
        "id": "solo-leveling-reawakening-19392",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a4721548991d6cb4887256c53fb61c66.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Attack on Titan: The Last Attack",
        "alternativeTitle": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack",
        "id": "attack-on-titan-the-last-attack-19391",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9b17cd8c7479d523d77e5e2cbbb5ad67.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Gintama on Theater 2D: Kintama-hen",
        "alternativeTitle": "Gintama on Theater 2D: Kintama-hen",
        "id": "gintama-on-theater-2d-kintama-hen-19389",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/61cb6748bcd1d62e6d36c05aa4800af4.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Beastars Final Season",
        "alternativeTitle": "Beastars Final Season",
        "id": "beastars-final-season-19385",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ea454828c29e151861998bada7f07301.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Pinkfong-gwa Hogi: Sae Chingu Ninimo",
        "alternativeTitle": "Pinkfong-gwa Hogi: Sae Chingu Ninimo",
        "id": "pinkfong-gwa-hogi-sae-chingu-ninimo-19384",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b8f995d602bf8a2def55ab975f0bb96c.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Pochaazu",
        "alternativeTitle": "Pochaazu",
        "id": "pochaazu-19383",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/1258fd70e67fdbbb562122c663fd363f.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      },
      {
        "title": "Kumarba Season 2",
        "alternativeTitle": "Kumarba Season 2",
        "id": "kumarba-season-2-19382",
        "poster": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6a3930b682c0ba3cc459fc9b6625151a.jpg",
        "episodes": {
          "sub": 0,
          "dub": 0,
          "eps": 0
        }
      }
    ],
    "genres": []
  }
}
```

### `GET` hianime A to Z List Page

#### Endpoint

```url
https://api-anime-rouge.vercel.app/hianime/animes/az-list?page=${page}
```

#### Query Parameters

| Parameter |  Type  |       Description       | Required? | Default |
| :-------: | :----: | :---------------------: | :-------: | :-----: |
|  `page`   | number | Page No. of Search Page |    YES    |    1    |

#### Request sample

```typescript
const resp = await fetch("https://api-anime-rouge.vercel.app/hianime/animes/az-list?page=69");
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
https://api-anime-rouge.vercel.app/hianime/anime/:id
```

#### Query Parameters

| Parameter |  Type  |     Description     | Required? | Default |
| :-------: | :----: | :-----------------: | :-------: | :-----: |
|   `id`    | string | The unique Anime ID |    YES    |  -----  |

> [!NOTE]
> Anime ID should be In <kbd><b>Kebab Case</b></kbd>

#### Request sample

```javascript
const resp = await fetch("https://api-anime-rouge.vercel.app/hianime/anime/one-piece-100");
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
https://api-anime-rouge.vercel.app/hianime/search?keyword=$(query)&page=$(page)
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
   "https://api-anime-rouge.vercel.app/hianime/search?keyword=one+piece&page=1"
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
https://api-anime-rouge.vercel.app/hianime/:query/:category?page=$(page)
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
const resp = await fetch("https://api-anime-rouge.vercel.app/hianime/genres/action?page=1");
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
https://api-anime-rouge.vercel.app/hianime/episodes/:id
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
const resp = await fetch("https://api-anime-rouge.vercel.app/hianime/episodes/one-piece-100");
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
https://api-anime-rouge.vercel.app/hianime/servers?episodeId=${id}
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
   "https://api-anime-rouge.vercel.app/hianime/servers?episodeId=one-piece-100?ep=84802"
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
   "https://api-anime-rouge.vercel.app/hianime/sources?episodeId=solo-leveling-18718?ep=120094&server=4&audio=sub"
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

-  [Eltik / Anify](https://github.com/Eltik/Anify)

#############################################################################

## <span>🤝 Thanks ❤️</span>

-  [consumet.ts](https://github.com/consumet/consumet.ts)
-  [ghoshRitesh12](https://github.com/ghoshRitesh12)
