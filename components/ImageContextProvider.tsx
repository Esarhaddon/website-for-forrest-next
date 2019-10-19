import { createContext, useContext, ReactNode, useState } from "react";

interface ImageContextType {
  images: {
    illustration: { src: string; name: string }[] | null;
    animation: ImageContextType["images"]["illustration"];
    "fine-art": ImageContextType["images"]["illustration"];
  } | null;
}

const ImageContext = createContext({} as ImageContextType);

interface ImageContextProviderProps {
  value: ImageContextType;
  [x: string]: any | null;
}

const ImageContextProvider = ({
  value = { images: null },
  ...restOfProps
}: ImageContextProviderProps) => {
  return <ImageContext.Provider value={value} {...restOfProps} />;
};

export const useImage = () => {
  const context = useContext(ImageContext);
  return context;
};

export default ImageContextProvider;
