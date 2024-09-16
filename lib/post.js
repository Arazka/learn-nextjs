import matter from "gray-matter";
import { marked } from "marked";
import { readdir, readFile } from "node:fs/promises";

export async function getPosts(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf8");
  const {
    content,
    data: { title, image, date, author, description },
  } = matter(text);
  const body = marked(content);

  return { slug, title, image, date, author, description, body };
}

export async function getAllPosts() {
  const slugs = await getSlugs();
  const posts = [];

  for (const slug of slugs) {
    const post = await getPosts(slug);
    posts.push(post);
  }

  return posts;
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  return files.filter((file) => file.endsWith(".md")).map((file) => file.slice(0, -".md".length));
}
