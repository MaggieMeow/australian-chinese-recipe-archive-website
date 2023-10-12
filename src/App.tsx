import HTMLFlipBook from "react-pageflip";
import styles from "./App.module.scss";
import React, {
  EventHandler,
  FC,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Page, PageCover } from "./components/Book/Page";
import MyBook from "./components/Book/Book";
import cx from "classnames";
import { Header } from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useStore } from "./store";
import { NarrativePage } from "./pages/narrative";
import { AboutPage } from "./pages/about";
import { AckPage } from "./pages/acknowledgement";
import { DataPage } from "./pages/data";

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
    console.log(e);
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
        <MyBook
          interestedPage={interestedPage}
          isShelfOpen={isShelfOpen}
          openBook={openBook}
          closeBook={closeBook}
        />
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
