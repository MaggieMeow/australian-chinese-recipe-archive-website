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
import { IllustrationPage, Page, PageCover } from "./Page";
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
      openBook();
      setTimeout(() => {
        bookHandler.pageFlip().flip(interestedPage);
      }, 10);
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

  const isPadWidth = useMemo(() => {
    return window.innerWidth < 725 && window.innerWidth > 630;
  }, []);

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < recipes.length; i++) {
      result.push(
        <Page key={recipes[i].title} recipe={recipes[i]} number={i * 2 + 1} />
      );
      result.push(
        <IllustrationPage
          key={recipes[i].title + "illustration"}
          number={i * 2 + 2}
          recipe={recipes[i]}
        />
      );
    }
    return result;
  }, []);

  return (
    <>
      <HTMLFlipBook
        usePortrait={isMobile}
        minWidth={isPadWidth ? window.innerWidth - 100 : 330}
        width={isPadWidth ? window.innerWidth - 100 : 330}
        maxWidth={600}
        height={isPadWidth ? window.innerHeight - 100 : 450}
        minHeight={isPadWidth ? window.innerHeight - 100 : 450}
        maxHeight={isPadWidth ? window.innerHeight - 100 : 450}
        autoSize={isPadWidth ? false : true}
        size="stretch"
        showCover={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        ref={bookHandlerRef}
      >
        <PageCover></PageCover>
        {pages}

        <PageCover isBackCover={true}></PageCover>
      </HTMLFlipBook>

      <button
        className={`relative t-0 pt-1 pointer bg-[#f3ecdb] rounded-sm shadow-sm h-6 w-6 transition-all ${
          isShelfOpen ? "opacity-100" : "opacity-0"
        }`}
        onClickCapture={onClose}
        style={{
          visibility: isShelfOpen ? "visible" : "hidden",
        }}
      >
        <span>
          <svg
            className="animate-bounce w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Arrow / Caret_Down_MD">
                <path
                  id="Vector"
                  d="M16 10L12 14L8 10"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
          </svg>
        </span>
      </button>
    </>
  );
}

export default MyBook;
