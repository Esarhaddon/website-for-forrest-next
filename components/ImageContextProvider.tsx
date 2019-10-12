import { createContext, useContext, ReactNode, useState } from "react";

interface ImageContextType {
  // someContext: null | string;
  image: {
    src: string;
    name: string;
    fromPage: "illustration" | "animation" | "fine art" | null;
  } | null;
  updateImage: (image: ImageContextType["image"]) => void;
}

const ImageContext = createContext({} as ImageContextType);

interface ImageContextProviderProps {
  value: { image: ImageContextType["image"] };
  [x: string]: any | null;
}

const ImageContextProvider = ({
  value = { image: null },
  ...restOfProps
}: ImageContextProviderProps) => {
  const [image, updateImage] = useState(value.image);
  console.log("image in provider is", image);
  return (
    <ImageContext.Provider
      value={{
        image,
        updateImage
      }}
      {...restOfProps}
    />
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  return context;
};

export default ImageContextProvider;
