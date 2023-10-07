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

function Narrative(props: { setInterestedPage: (page: number) => void }) {
  return (
    <div>
      <p>
        <a
          onClick={() => {
            props.setInterestedPage(1);
          }}
        >
          Lorem
        </a>
        ipsum dolor, sit amet consectetur adipisicing elit. Repellat nostrum
        illo eveniet unde? Velit in fugit sapiente temporibus eum ut! Doloribus,
        impedit facilis aliquid id et obcaecati cumque temporibus tenetur.
      </p>
      <p>
        <a
          onClick={() => {
            props.setInterestedPage(3);
          }}
        >
          Lorem
        </a>{" "}
        ipsum dolor, sit amet consectetur adipisicing elit. Repellat nostrum
        illo eveniet unde? Velit in fugit sapiente temporibus eum ut! Doloribus,
        impedit facilis aliquid id et obcaecati cumque temporibus tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        nostrum illo eveniet unde? Velit in fugit sapiente temporibus eum ut!
        Doloribus, impedit facilis aliquid id et obcaecati cumque temporibus
        tenetur.
      </p>
    </div>
  );
}

function App() {
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  function toggleShelf() {
    // setIsShelfOpen(true) // open
    setIsShelfOpen((prev) => !prev); // toggle
  }

  const [interestedPage, setInterestedPage] = useState<number | null>(null);

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
        <Narrative setInterestedPage={setInterestedPage} />
        <button onClick={toggleShelf}>Open</button>
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
}

export default App;
