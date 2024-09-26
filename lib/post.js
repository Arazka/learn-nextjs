import { marked } from "marked";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";
export const CACHE_TAG_POSTS = "posts";

// get data single post
export async function getPosts(slug) {
  const { data } = await fetchPosts({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ["title", "publishedAt", "body"],
    populate: { image: { fields: "url" } },
    pagination: { pageSize: 1, withCount: false },
  });

  if (data.length === 0) {
    return null;
  }

  const { attributes } = data[0];

  return {
    ...toPost({ attributes }),
    body: marked(attributes.body, { headersIds: false, mangle: false }),
  };
}

// get all data post
export async function getAllPosts(pageSize, page) {
  const { data, meta } = await fetchPosts({
    fields: ["slug", "title", "description", "publishedAt"],
    populate: { image: { fields: "url" } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize, page },
  });

  return {
    pageCount: meta.pagination.pageCount,
    posts: data.map(toPost),
  };
}

// get slugs
export async function getSlugs() {
  const { data } = await fetchPosts({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });

  return data.map(({ attributes }) => attributes.slug);
}

// function fecth API data posts agar bisa digunakan dibeberapa function lain dan code jadi lebih clean
async function fetchPosts(parameter) {
  const url = `${BACKEND_URL}/api/posts/?` + qs.stringify(parameter, { encodeValuesOnly: true });
  console.log(url);

  const res = await fetch(url, { next: { tags: [CACHE_TAG_POSTS] } });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

// return attribute untuk ditampilkan di halaman blog
function toPost({ attributes }) {
  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    body: attributes.body,
    author: "Admin",
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + attributes.image.data.attributes.url,
  };
}
