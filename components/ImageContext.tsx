import { createContext } from "react";

interface ImageContextType {
  someContext: null | string;
}

const ImageContext = createContext({} as ImageContextType);

export default ImageContext;
