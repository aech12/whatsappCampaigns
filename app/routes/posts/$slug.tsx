import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  return json(await getPost(params.slug ?? ""));
};

export default function PostSlug() {
  const post = useLoaderData();
  return (
    <main>
      <h1>
        {post.title}: {post.slug}
      </h1>
    </main>
  );
}
