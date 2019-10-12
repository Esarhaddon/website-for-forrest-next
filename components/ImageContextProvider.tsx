import { createContext, useContext, ReactNode, useState } from "react";

interface ImageContextType {
  // someContext: null | string;
  image: {
    src: string;
    name: string;
  };
  updateImage: (image: ImageContextType["image"]) => void;
}

const ImageContext = createContext({} as ImageContextType);

interface ImageContextProviderProps {
  value: ImageContextType["image"];
  [x: string]: any;
  // children: ReactNode;
}

const ImageContextProvider = ({
  value = { src: "none", name: "none" },
  ...restOfProps
}: ImageContextProviderProps) => {
  // const { value, ...restOfProps } = props;
  const [image, updateImage] = useState(value);
  console.log("image in Provider is", image);
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

// const ImageContext = createContext({} as ImageContextType);

// export default ImageContext;
