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
  children: ReactNode;
}

const ImageContextProvider = ({ children }: { children: ReactNode }) => {
  const context: ImageContextType = {
    images: {
      illustration: [
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" }
      ],
      animation: [
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" }
      ],
      "fine-art": [
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" },
        { src: "fake.com", name: "fake-image" }
      ]
    }
  };
  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  return context;
};

export default ImageContextProvider;
