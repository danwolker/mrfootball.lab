import { createContext, useContext, ReactNode, useState } from "react";

export interface RegistryContextType {
  isBrandOpen: boolean;
  isColorOpen: boolean;
  isLineOpen: boolean;
  isSoccerBootOpen: boolean;
  openCloseBrands: (value: boolean) => void;
  openCloseColors: (value: boolean) => void;
  openCloseLines: (value: boolean) => void;
  openCloseSoccerBoot: (value: boolean) => void;
}

const RegistryContext = createContext<RegistryContextType | undefined>(
  undefined
);

export const RegistryProvider = ({ children }: { children: ReactNode }) => {
  const [isBrandOpen, setisBrandOpen] = useState(false);
  const [isColorOpen, setisColorOpen] = useState(false);
  const [isLineOpen, setisLineOpen] = useState(false);
  const [isSoccerBootOpen, setisSoccerBootOpen] = useState(false);

  function openCloseSoccerBoot(value:boolean) {
    setisSoccerBootOpen(value)
  }

  function openCloseBrands(value: boolean) {
    setisBrandOpen(value);
  }

  function openCloseColors(value:boolean) {
    setisColorOpen(value)
  }

  function openCloseLines(value:boolean) {
    setisLineOpen(value)
  }


  return (
    <RegistryContext.Provider
      value={{
        isBrandOpen,
        openCloseBrands,
        isColorOpen,
        openCloseColors,
        isLineOpen,
        openCloseLines,
        isSoccerBootOpen,
        openCloseSoccerBoot
      }}
    >
      {children}
    </RegistryContext.Provider>
  );
};

export const useRegistry = (): RegistryContextType => {
  const context = useContext(RegistryContext);
  if (!context) {
    throw new Error("Erro no Provider");
  }
  return context;
};
