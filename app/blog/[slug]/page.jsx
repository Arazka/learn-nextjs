import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPosts, getSlugs } from "@/lib/post";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// export const dynamicParams = false;
// export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  // const slug = params.slug;
  const post = await getPosts(slug);
  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  // console.log("slug: " + slug);
  // slug berisikan url yang ditangkap dari file page.jsx yg ada didalam folder blog
  const post = await getPosts(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Heading>{post.title}</Heading>
      <Image src={post.image} alt={post.title} width={640} height={360} className="mb-2 rounded-sm w-full h-auto" />
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="italic text-sm text-slate-500">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <article dangerouslySetInnerHTML={{ __html: post.body }} className="prose prose-slate max-w-screen-sm" />
    </>
  );
}
