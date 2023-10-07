import HTMLFlipBook from "react-pageflip";
import styles from "./App.module.scss";
import React, {
  FC,
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

  return (
    <div>
      <Narrative setInterestedPage={setInterestedPage} />
      <button onClick={toggleShelf}>Open</button>

      <div
        className={cx(styles.bookShelf, isShelfOpen && styles.bookShelfOpen)}
      >
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
