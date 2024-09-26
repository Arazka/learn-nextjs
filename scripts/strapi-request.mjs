import { writeFileSync } from "node:fs";
import qs from "qs";

const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      fields: ["slug", "title", "description", "publishedAt"],
      populate: { image: { fields: "url" } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 3, page: 1 },
    },
    { encodeValuesOnly: true }
  );
const res = await fetch(url);
const body = await res.json();
const posts = JSON.stringify(body, null, 2);
// console.log(posts);

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
