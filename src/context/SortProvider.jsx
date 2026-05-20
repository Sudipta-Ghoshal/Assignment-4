import { useMemo, useState } from "react";
import { SortContext } from "./SortContext";

export default function SortProvider({ children }) {
  const [sort, setSort] = useState("newest");
  const value = useMemo(() => ({ sort, setSort }), [sort]);

  return (
    <SortContext.Provider value={value}>{children}</SortContext.Provider>
  );
}
