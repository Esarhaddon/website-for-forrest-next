import { createContext, useContext, ReactNode, useState } from "react";

interface IImageContext {
  images: {
    illustration:
      | { src: string; name: string; title: string; description: string }[]
      | null;
    animation: IImageContext["images"]["illustration"];
    "fine-art": IImageContext["images"]["illustration"];
  } | null;
}

const ImageContext = createContext({} as IImageContext);

const ImageContextProvider = ({ children }: { children: ReactNode }) => {
  const context: IImageContext = {
    images: {
      illustration: [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-9",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-10",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-11",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-12",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-13",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
      ],
      animation: [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
      ],
      "fine-art": [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-9",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-10",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
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
