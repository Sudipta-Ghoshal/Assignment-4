import { useContext } from "react";

import { SortContext } from "./SortContext";

export default function useSort() {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error("useSort must be used inside SortProvider");
  }

  return context;
}
