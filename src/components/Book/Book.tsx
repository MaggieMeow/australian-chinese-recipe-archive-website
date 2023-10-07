import HTMLFlipBook from "react-pageflip";
import "./styles.scss";
import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useMemo,
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
  console.log("isMobile", isMobile);

  const isPadWidth = useMemo(() => {
    return window.innerWidth < 725 && window.innerWidth > 630;
  }, []);
  return (
    <>
      <HTMLFlipBook
        usePortrait={isMobile}
        minWidth={isPadWidth ? window.innerWidth - 100 : 350}
        width={isPadWidth ? window.innerWidth - 100 : 350}
        maxWidth={600}
        height={isPadWidth ? window.innerHeight - 100 : 500}
        minHeight={isPadWidth ? window.innerHeight - 100 : 500}
        maxHeight={isPadWidth ? window.innerHeight - 100 : 500}
        autoSize={isPadWidth ? false : true}
        size="stretch"
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

      <button
        className="close-button"
        onClickCapture={onClose}
        style={{
          visibility: props.isShelfOpen ? "visible" : "hidden",
        }}
      >
        X
      </button>
    </>
  );
}

export default MyBook;
