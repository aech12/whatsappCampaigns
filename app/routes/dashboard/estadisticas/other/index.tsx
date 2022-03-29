import { ActionFunction, Form } from "remix";

export const action: ActionFunction = async ({ request }) => {
  console.log("REACTION");
  return 10;
};

export default function MyForm() {
  return (
    <Form method="post">
      <button>Retry</button>
    </Form>
  );
}
