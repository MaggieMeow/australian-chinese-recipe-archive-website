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
import { useStore } from "../../store";

function isWindowMobileSize() {
  const { innerWidth: width } = window;
  return width <= 768;
}

function MyBook() {
  const isShelfOpen = useStore((state) => state.isShelfOpen);
  const setIsShelfOpen = useStore((state) => state.setIsShelfOpen);
  const interestedPage = useStore((state) => state.interestedPage);
  const setInterestedPage = useStore((state) => state.setInterestedPage);

  const openBook = () => {
    setIsShelfOpen(true);
  };
  const closeBook = () => {
    setIsShelfOpen(false);
    setInterestedPage(null);
  };

  const bookHandlerRef = useRef();
  const bookHandler = bookHandlerRef.current as any;
  const [isMobile, setIsMobile] = useState(isWindowMobileSize);

  useEffect(() => {
    if (interestedPage !== null) {
      bookHandler.pageFlip().flip(interestedPage);
      openBook();
    }
  }, [interestedPage]);

  // setIsmobile on resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setIsMobile(isWindowMobileSize());
    });
    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  function onClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    closeBook(); // close shelf and clear `interestedPage`
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
          visibility: isShelfOpen ? "visible" : "hidden",
        }}
      >
        ▼
      </button>
    </>
  );
}

export default MyBook;
