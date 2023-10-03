import HTMLFlipBook from "react-pageflip";
import styles from "./App.scss";
import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

console.log("styles", styles);

const PageCover = forwardRef<HTMLDivElement, { children?: ReactNode }>(
  (props, ref) => {
    return (
      <div className="page page-cover" data-density="hard" ref={ref}>
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  }
);

const Page = forwardRef<
  HTMLDivElement,
  {
    number: number;
    title: string;
    coverImageUrl: string;
    content: string;
    children?: ReactNode;
  }
>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.title}</h2>
        <div className="page-image-wrap">
          <img className="page-image" src={props.coverImageUrl} />
        </div>
        <div className="page-text">{props.content}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

const recipes = [
  {
    coverImageUrl: "https://source.unsplash.com/random",
    title: "My Recipe 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
  {
    coverImageUrl: "https://source.unsplash.com/random?id=1",
    title: "My Recipe 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
  {
    coverImageUrl: "https://source.unsplash.com/random?id=2",
    title: "My Recipe 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
  {
    coverImageUrl: "https://source.unsplash.com/random?id=3",
    title: "My Recipe 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
  {
    coverImageUrl: "https://source.unsplash.com/random?id=4",
    title: "My Recipe 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
  {
    coverImageUrl: "https://source.unsplash.com/random?id=5",
    title: "My Recipe 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore voluptatibus at sunt consectetur modi, non, ipsum perspiciatis, accusantium suscipit hic corrupti. Quas minima in fugiat ipsam delectus, voluptate voluptates.",
  },
];

function MyBook(props: any) {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(true);

  // setIsmobile on resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setIsMobile(width <= 768);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <HTMLFlipBook
      minWidth={515}
      usePortrait={isMobile}
      width={550}
      height={733}
      size="stretch"
      maxWidth={600}
      minHeight={400}
      maxHeight={1533}
      showCover={true}
      maxShadowOpacity={0.5}
      mobileScrollSupport={true}
      ref={ref}
    >
      <PageCover>Evolution of Chinese Recipes in Australian Print</PageCover>

      {recipes.map((recipe, index) => (
        <Page
          coverImageUrl={recipe.coverImageUrl}
          title={recipe.title}
          content={recipe.content}
          number={index}
        />
      ))}

      <PageCover>THE END</PageCover>
    </HTMLFlipBook>
  );
}

export default MyBook;
