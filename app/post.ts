export type Post = {
  slug: string;
  title: string;
};

export function getPosts() {
  const posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
  return posts;
}

const postsDb = [
  {
    slug: "my-first-post",
    title: "My First Post",
  },
  {
    slug: "90s-mixtape",
    title: "A Mixtape I Made Just For You",
  },
];

export async function getPost(slug: Post["slug"]) {
  const post: Post[] = postsDb.filter((post) => post.slug === slug);
  return post[0];
}
