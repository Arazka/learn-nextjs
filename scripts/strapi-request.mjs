import { writeFileSync } from "node:fs";
import qs from "qs";

const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: "tips-produktivitas-untuk-programmer",
        },
      },
      fields: ["title", "publishedAt", "body"],
      populate: { image: { fields: "url" } },
      pagination: { pageSize: 1, withCount: false },
    },
    { encodeValuesOnly: true }
  );
const res = await fetch(url);
const body = await res.json();
const posts = JSON.stringify(body, null, 2);
// console.log(posts);

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
