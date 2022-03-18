import { ReactChildren, ReactChild } from "react";

interface Props {
  children: ReactChild | ReactChildren;
}

export default function Component({ children }: Props) {
  return (
    <main className="p-5 m-6 w-full bg-base-100 shadow-xl rounded-md">
      {children}
    </main>
  );
}
