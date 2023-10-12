import cx from "classnames";
import React, {
  EventHandler,
  FC,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const interestedPage = useStore((state) => state.interestedPage);
  const setInterestedPage = useStore((state) => state.setInterestedPage);

  function clickToPage(page: number) {
    setInterestedPage(page);
    setIsShelfOpen(true);
  }

  function closeBook() {
    setIsShelfOpen(false);
    setInterestedPage(null);
  }
  function openBook() {
    setIsShelfOpen(true);
  }

  function onBookClick(
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) {
    e.stopPropagation();
    e.preventDefault();
    if (!isShelfOpen) {
      openBook();
    }
  }

  function preventEvent(e: React.TouchEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div>
      <div className={styles.mainContentContainer}>
        <Header />
        <Outlet />
      </div>

      <div
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
