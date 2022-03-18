import { ReactChildren, ReactChild } from "react";

interface Props {
  children: ReactChild | ReactChildren;
}

export default function Component({ children }: Props) {
  return <section className="min-h-screen">{children}</section>;
}
