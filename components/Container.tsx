import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl p-1 md:p-2.5 mx-auto">{children}</div>
  );
};

export default Container;
