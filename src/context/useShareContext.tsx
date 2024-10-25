// useShareContext.ts
import { useContext } from "react";
import ShareContext from "./shareContext";

export const useShareContext = () => {
  const context = useContext(ShareContext);
  if (context === null) {
    throw new Error("useShareContext must be used within a ShareProvider");
  }
  return context;
};
