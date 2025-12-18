import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface PageContextType {
  currentPage: number;
  setCurrentPage: (p: number) => void;
}

export const PageContext = createContext<PageContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
});

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
