import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

// export const revalidate = 30;
export const metadata = {
  title: "Blog",
};

export default async function BlogPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { pageCount, posts } = await getAllPosts(3, page);

  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className="text-2xl mb-3">List Of Post</h2>
      <Pagination href="blog" page={page} pageCount={pageCount} />
      {posts.map((post, index) => (
        <PostCard key={index} image={post.image} href={`/blog/${post.slug}`} title={post.title} date={post.date} author={post.author} desc={post.description} />
      ))}
    </>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }

  return 1;
}
