// ShareContext.tsx
import { createContext, ReactNode, useState } from "react";

interface ShareContextType {
  sharedUsername: string;
  setSharedUsername: (username: string) => void;
}

const ShareContext = createContext<ShareContextType | null>(null);

export const ShareProvider = ({ children }: { children: ReactNode }) => {
  const [sharedUsername, setSharedUsername] = useState("");

  return (
    <ShareContext.Provider value={{ sharedUsername, setSharedUsername }}>
      {children}
    </ShareContext.Provider>
  );
};

export default ShareContext;
