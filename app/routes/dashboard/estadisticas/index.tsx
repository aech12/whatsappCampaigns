import { ActionFunction, Form } from "remix";

export const action: ActionFunction = async ({ request }) => {
  console.log("REACTION");
  return 10;
};
export default function AdminIndex() {
  return (
    <Form method="post">
      <p>stats</p>
      <button>Retry</button>
    </Form>
  );
}
