import invariant from "tiny-invariant";

export async function stringNotEmpty(string: string | null) {
  return invariant(typeof string === "string", "username must be a string");
}
