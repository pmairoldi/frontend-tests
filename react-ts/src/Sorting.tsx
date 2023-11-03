import { FC } from "react";

export const Sorting: FC<{ direction?: "asc" | "desc" }> = ({ direction }) => {
  return (
    <div>
      <h1>Hello {direction}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
