import { json, redirect, Form } from "remix";

import { createPost } from "~/post";
import type { ActionFunction } from "remix";

export const action: ActionFunction = async ({ request }) => {
  // const formData = await request.formData();

  // const title = formData.get("title");
  // const slug = formData.get("slug");
  // const markdown = formData.get("markdown");

  // const errors = {};
  // if (!title) errors.title = true;
  // if (!slug) errors.slug = true;
  // if (!markdown) errors.markdown = true;
  // if (Object.keys(errors).length) {
  //   return json(errors);
  // }

  // await createPost({ title, slug, markdown });

  return redirect("/admin");
};

export default function NewPost() {
  return (
    <div>
      <h2>New Post</h2>{" "}
      <Form method="post">
        <p>
          <label>
            Post Title: <input type="text" name="title" />
          </label>
        </p>
        <p>
          <label>
            Post Slug: <input type="text" name="slug" />
          </label>
        </p>
        <p>
          <label htmlFor="markdown">Markdown:</label>
          <br />
          <textarea id="markdown" rows={5} name="markdown" />
        </p>
        <p>
          <button type="submit">Create Post</button>
        </p>
      </Form>
    </div>
  );
}
