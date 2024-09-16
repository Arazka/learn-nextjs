import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPosts, getSlugs } from "@/lib/post";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const post = await getPosts(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  // slug berisikan url yang ditangkap dari file page.jsx yg ada didalam folder blog
  const post = await getPosts(slug);
  // console.log(slug);

  return (
    <>
      <Heading>{post.title}</Heading>
      <img src={post.image} alt="" width={640} height={360} className="mb-2 rounded-sm" />
      <div className="flex flex-row items-center justify-between">
        <p className="italic text-sm text-slate-500">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <article dangerouslySetInnerHTML={{ __html: post.body }} className="prose prose-slate max-w-screen-sm" />
    </>
  );
}
