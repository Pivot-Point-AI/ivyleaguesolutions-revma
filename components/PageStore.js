"use client";

import { createContext, useContext, useState } from "react";

const PageStoreContext = createContext(null);

export function PageStoreProvider({ children }) {
  const [heroDark, setHeroDark] = useState(false);
  return (
    <PageStoreContext.Provider value={{ heroDark, setHeroDark }}>
      {children}
    </PageStoreContext.Provider>
  );
}

export function usePageStore() {
  const ctx = useContext(PageStoreContext);
  if (!ctx) {
    // Fallback so components can be used without a provider during isolated rendering.
    return { heroDark: false, setHeroDark: () => {} };
  }
  return ctx;
}
