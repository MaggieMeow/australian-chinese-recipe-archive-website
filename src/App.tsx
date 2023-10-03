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

function Narrative() {
  return (
    <div>
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

  return (
    <>
      <Narrative />
      <button onClick={toggleShelf}>Open</button>
      <div
        className={cx(styles.bookShelf, isShelfOpen && styles.bookShelfOpen)}
      >
        <MyBook />
      </div>
    </>
  );
}

export default App;
