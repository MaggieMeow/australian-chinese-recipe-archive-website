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

function isWindowMobileSize() {
  const { innerWidth: width } = window;
  return width <= 768;
}

function MyBook(props: {
  interestedPage: number | null;
  isShelfOpen: boolean;
  closeBook: () => void;
  openBook: () => void;
}) {
  const bookHandlerRef = useRef();
  const bookHandler = bookHandlerRef.current as any;
  const [isMobile, setIsMobile] = useState(isWindowMobileSize);

  useEffect(() => {
    if (props.interestedPage !== null) {
      bookHandler.pageFlip().flip(props.interestedPage);
      props.openBook();
    }
  }, [props.interestedPage]);

  // setIsmobile on resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setIsMobile(isWindowMobileSize());
    });
    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
      const bookParentEl = document.querySelector(".stf__parent");
    };
  }, []);

  function onClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    props.closeBook(); // close shelf and clear `interestedPage`
  }

  return (
    <>
      <HTMLFlipBook
        onUpdate={console.log}
        onChangeState={console.log}
        minWidth={350}
        usePortrait={isMobile}
        width={350}
        height={500}
        size="stretch"
        maxWidth={600}
        minHeight={400}
        maxHeight={1533}
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        ref={bookHandlerRef}
      >
        <PageCover>
          <h1>Evolution of Chinese Recipes in Australian Print</h1>
          <h2>Curated by Maggie, Carina, Sihan, Lesin and Jim.</h2>
        </PageCover>

        {recipes.map((recipe, index) => (
          <Page key={recipe.title} recipe={recipe} number={index} />
        ))}

        <PageCover>THE END</PageCover>
      </HTMLFlipBook>
      <button className="close-button" onClickCapture={onClose}>
        Close
      </button>
    </>
  );
}

export default MyBook;
