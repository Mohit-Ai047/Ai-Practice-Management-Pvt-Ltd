// import axios from "axios";
// import https from "https";
// import { XMLParser } from "fast-xml-parser";
// import * as cheerio from "cheerio";

// /**
//  * HTTPS agent (some RSS feeds require this)
//  */
// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false
// });

// /**
//  * XML parser
//  */
// const parser = new XMLParser({
//   ignoreAttributes: false
// });

// /**
//  * RSS feeds
//  */
// const FEEDS = [
//   {
//     name: "CMS",
//     rss: "https://www.cms.gov/rss-feeds/newsroom/rss.xml",
//     fallbackImage: "https://www.cms.gov/themes/custom/cmsgov/logo.svg"
//   },
//   {
//     name: "Fierce Healthcare",
//     rss: "https://www.fiercehealthcare.com/rss/xml",
//     fallbackImage: "https://www.fiercehealthcare.com/favicon.ico"
//   },
//   {
//     name: "Healthcare Dive",
//     rss: "https://www.healthcaredive.com/feeds/news/",
//     fallbackImage: "https://www.healthcaredive.com/favicon.ico"
//   }
// ];

// /**
//  * Fetch OG image safely
//  */
// async function fetchOgImage(url, fallback) {
//   try {
//     const res = await axios.get(url, {
//       httpsAgent,
//       timeout: 7000,
//       headers: { "User-Agent": "Mozilla/5.0" }
//     });

//     const $ = cheerio.load(res.data);
//     return $('meta[property="og:image"]').attr("content") || fallback;
//   } catch {
//     return fallback;
//   }
// }

// /**
//  * Vercel Serverless Function
//  */
// export default async function handler(req, res) {
//   try {
//     let news = [];

//     for (const feed of FEEDS) {
//       try {
//         const rssRes = await axios.get(feed.rss, {
//           httpsAgent,
//           timeout: 8000,
//           headers: { "User-Agent": "Mozilla/5.0" }
//         });

//         const parsed = parser.parse(rssRes.data);

//         let items =
//           parsed?.rss?.channel?.item ||
//           parsed?.feed?.entry ||
//           [];

//         if (!Array.isArray(items)) continue;

//         items = items.slice(0, 10);

//         for (let i = 0; i < items.length; i++) {
//           const item = items[i];

//           const link =
//             item.link?.["@_href"] ||
//             item.link ||
//             item.id;

//           const image = await fetchOgImage(
//             link,
//             feed.fallbackImage
//           );

//           news.push({
//             id: `${feed.name}-${i}`,
//             title: item.title?.["#text"] || item.title,
//             url: link,
//             image,
//             date:
//               item.pubDate ||
//               item.published ||
//               item.updated ||
//               new Date().toISOString(),
//             source: feed.name
//           });
//         }
//       } catch (err) {
//         console.error(`Feed failed: ${feed.name}`, err.message);
//       }
//     }

//     res.status(200).json(news);
//   } catch (error) {
//     console.error("API error:", error.message);
//     res.status(500).json({ message: "Failed to load news" });
//   }
// }

import axios from "axios";
import https from "https";
import { XMLParser } from "fast-xml-parser";
import * as cheerio from "cheerio";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const parser = new XMLParser({
  ignoreAttributes: false,
  cdataPropName: "__cdata",
});

const FEEDS = [
  {
    name: "Healthcare Dive",
    rss: "https://www.healthcaredive.com/feeds/news/",
    image: "https://www.healthcaredive.com/favicon.ico",
    scrapeImage: true,
  },
  {
    name: "CMS",
    rss: "https://www.cms.gov/newsroom/rss.xml",
    image: "https://www.cms.gov/themes/custom/cmsgov/logo.svg",
    scrapeImage: false,
  },
  {
    name: "Fierce Healthcare",
    rss: "https://www.fiercehealthcare.com/rss/xml",
    image: "https://www.fiercehealthcare.com/favicon.ico",
    scrapeImage: false,
  },
];

async function fetchOgImage(url, fallback) {
  try {
    const res = await axios.get(url, {
      httpsAgent,
      timeout: 7000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const $ = cheerio.load(res.data);
    return $('meta[property="og:image"]').attr("content") || fallback;
  } catch {
    return fallback;
  }
}

export default async function handler(req, res) {
  try {
    let news = [];

    for (const feed of FEEDS) {
      try {
        const rssRes = await axios.get(feed.rss, {
          httpsAgent,
          timeout: 10000,
          headers: { "User-Agent": "Mozilla/5.0" },
        });

        const parsed = parser.parse(rssRes.data);
        const items = parsed?.rss?.channel?.item || parsed?.feed?.entry || [];

        if (!Array.isArray(items)) continue;

        for (let i = 0; i < Math.min(items.length, 10); i++) {
          const item = items[i];

          const title =
            typeof item.title === "string"
              ? item.title
              : item.title?.__cdata ||
                item.title?.["#text"] ||
                "Healthcare Update";

          const link =
            item.link?.["@_href"] ||
            item.link ||
            item.id;

          if (!link) continue;

          const image = feed.scrapeImage
            ? await fetchOgImage(link, feed.image)
            : feed.image;

          news.push({
            id: `${feed.name}-${i}`,
            title,
            url: link,
            image,
            date:
              item.pubDate ||
              item.published ||
              item.updated ||
              new Date().toISOString(),
            source: feed.name,
          });
        }
      } catch (err) {
        console.error(`Feed failed: ${feed.name}`, err.message);
      }
    }

    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ message: "Failed to load news" });
  }
}