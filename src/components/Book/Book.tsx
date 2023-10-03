import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Page, PageCover } from "./Page";
import { recipes } from "../../data/recipes";

function MyBook(props: any) {
  const bookHandler = useRef();
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
    <>
      <HTMLFlipBook
        minWidth={515}
        usePortrait={isMobile}
        width={550}
        height={733}
        size="fixed"
        maxWidth={600}
        minHeight={400}
        maxHeight={1533}
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        ref={bookHandler}
      >
        <PageCover>
          <h1>Evolution of Chinese Recipes in Australian Print</h1>
          <h2>By Yundi Maggie Li, Carina, Sihan, Lesin and Jim.</h2>
        </PageCover>

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
      {/* <button
        onClick={() => {
          console.log(bookHandler.current.pageFlip().flipNext());
        }}
      >
        next
      </button> */}
    </>
  );
}

export default MyBook;
