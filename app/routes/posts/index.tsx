import { json, useLoaderData, Link } from "remix";
import type { Post } from "~/post";
import { getPosts } from "~/post";

export const loader = async () => json(await getPosts());

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
