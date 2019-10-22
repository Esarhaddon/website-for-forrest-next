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
        { src: "fake.com", name: "fake-image-1" },
        { src: "fake.com", name: "fake-image-2" },
        { src: "fake.com", name: "fake-image-3" },
        { src: "fake.com", name: "fake-image-4" },
        { src: "fake.com", name: "fake-image-5" },
        { src: "fake.com", name: "fake-image-6" },
        { src: "fake.com", name: "fake-image-7" },
        { src: "fake.com", name: "fake-image-8" },
        { src: "fake.com", name: "fake-image-9" },
        { src: "fake.com", name: "fake-image-10" },
        { src: "fake.com", name: "fake-image-11" },
        { src: "fake.com", name: "fake-image-12" },
        { src: "fake.com", name: "fake-image-13" }
      ],
      animation: [
        { src: "fake.com", name: "fake-image-1" },
        { src: "fake.com", name: "fake-image-2" },
        { src: "fake.com", name: "fake-image-3" },
        { src: "fake.com", name: "fake-image-4" },
        { src: "fake.com", name: "fake-image-5" },
        { src: "fake.com", name: "fake-image-6" },
        { src: "fake.com", name: "fake-image-7" },
        { src: "fake.com", name: "fake-image-8" }
      ],
      "fine-art": [
        { src: "fake.com", name: "fake-image-1" },
        { src: "fake.com", name: "fake-image-2" },
        { src: "fake.com", name: "fake-image-3" },
        { src: "fake.com", name: "fake-image-4" },
        { src: "fake.com", name: "fake-image-5" },
        { src: "fake.com", name: "fake-image-6" },
        { src: "fake.com", name: "fake-image-7" },
        { src: "fake.com", name: "fake-image-8" },
        { src: "fake.com", name: "fake-image-9" },
        { src: "fake.com", name: "fake-image-10" }
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
