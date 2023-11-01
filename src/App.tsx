import cx from "classnames";
import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import styles from "./App.module.scss";
import MyBook from "./components/Book/Book";
import { Page, PageCover } from "./components/Book/Page";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/about";
import { AckPage } from "./pages/acknowledgement";
import { DataPage } from "./pages/data";
import { NarrativePage } from "./pages/narrative";
import { useStore } from "./store";

const Layout = () => {
  const isShelfOpen = useStore((state) => state.isShelfOpen);
  const setIsShelfOpen = useStore((state) => state.setIsShelfOpen);

  function onBookClick(
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) {
    e.stopPropagation();
    e.preventDefault();
    if (!isShelfOpen) {
      setIsShelfOpen(true);
    }
  }

  function preventEvent(e: React.TouchEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  const bookContainerRef = createRef<HTMLDivElement>();

  const [transforms, setTransforms] = useState<Record<any, any>>({
    translateY: "calc(95%)",
    translateZ: "0",
  });

  useEffect(() => {
    // const containerParent = bookContainerRef.current;

    if (isShelfOpen) {
      const container = bookContainerRef.current;
      if (container) {
        const { height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        console.log({
          height,
        });
        const currTransform = container.computedStyleMap().get("transform");
        console.log(currTransform);
        if (height > windowHeight) {
          const ratio = windowHeight / height;
          setTransforms((prev) => ({
            ...prev,
            scale: ratio * 0.95,
          }));
          // containerParent.style.transform = `scale(${0.8})`;
        }
        console.log(container);
      }

      setTransforms((prev) => ({
        ...prev,
        translateY: "0",
      }));
    } else {
      // closing, remove the scaling
      setTransforms((prev) => ({
        ...prev,
        translateY: "calc(95%)",
        scale: 1,
      }));
    }
  }, [isShelfOpen]);

  const transformStyle = useMemo(() => {
    let result = "";
    Object.keys(transforms).forEach((tr) => {
      result += `${tr}(${transforms[tr]}) `;
    });
    return result;
  }, [transforms]);
  console.log({
    transformStyle,
    transforms,
  });
  return (
    <div>
      <div className={styles.mainContentContainer}>
        <Header />
        {/* the text content section */}
        <section className="max-w-[1200px] mx-auto px-12 pt-8">
          {/* Outlet is the slot that the router children elements render in */}
          <Outlet />
        </section>
      </div>

      <div>
        <div
          ref={bookContainerRef}
          style={{
            transform: transformStyle,
            transformOrigin: "bottom",
          }}
          className={cx(styles.bookShelf, isShelfOpen && styles.bookShelfOpen)}
        >
          <div
            onClickCapture={onBookClick}
            onTouchStartCapture={onBookClick}
            onTouchEnd={preventEvent}
            style={{
              position: "absolute",
              width: "100%",
              height: "calc(100% + 20px)",
              zIndex: isShelfOpen ? 0 : 100,
            }}
          />
          <MyBook />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <NarrativePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // acknowledge
      {
        path: "/acknowledgement",
        element: <AckPage />,
      },
      // data
      {
        path: "/data",
        element: <DataPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
