import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  // console.log(posts);

  return (
    <>
      <Heading>Blog Page</Heading>
      <h2 className="text-2xl mb-3">List Of Post</h2>
      {posts.map((post, index) => (
        <PostCard key={index} image={post.image} href={`/blog/${post.slug}`} title={post.title} date={post.date} author={post.author} desc={post.description} />
      ))}
    </>
  );
}
