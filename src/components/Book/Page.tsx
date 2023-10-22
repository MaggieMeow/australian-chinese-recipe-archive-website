import { ReactNode, forwardRef } from "react";
import { recipes } from "../../data/recipes";

import "./styles.scss";
import troveLogo from "../../assets/trove-colour.svg";

export const Page = forwardRef<
  HTMLDivElement,
  {
    recipe: (typeof recipes)[number];
    number: number;
    children?: ReactNode;
  }
>((props, ref) => {
  const {
    title,
    coverImageUrl,
    content,
    // screenshotUrl,
    date,
    publisher,
    troveUrl,
    tags,
  } = props.recipe;
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-header">
          <h3>{publisher}</h3>
          <h3>{date}</h3>
        </div>
        <h2 className="page-title">{title}</h2>
        {tags?.length && (
          <div className="page-tags">
            {tags.map((tag, index) => (
              <span className="page-tag" key={tag}>
                {tag} {index < tags.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        )}
        <div className="page-text">
          <img
            className="page-cover-image page-image-bordered"
            src={coverImageUrl}
          />
          <p
            style={{
              marginTop: content.length > 700 ? 0 : "7em",
            }}
          >
            {content}
          </p>
          {/* <img className="page-screenshot" src={screenshotUrl} /> */}
          <a className="book-button lined" href={troveUrl} target="blank">
            <span>View on</span>
            <img src={troveLogo} />
          </a>
        </div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});

export const PageCover = forwardRef<
  HTMLDivElement,
  { isBackCover?: boolean; children?: ReactNode }
>((props, ref) => {
  const isBackCover = props.isBackCover;
  return (
    <div
      className={`page ${isBackCover ? "page-back-cover" : "page-cover"}`}
      data-density="hard"
      ref={ref}
    >
      <div className="page-content">{props.children}</div>
    </div>
  );
});

export const IllustrationPage = forwardRef<
  HTMLDivElement,
  {
    recipe: (typeof recipes)[number];
    number: number;
    children?: ReactNode;
  }
>((props, ref) => {
  const { screenshotUrls, date, publisher } = props.recipe;

  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-header">
          <h3>{publisher}</h3>
          <h3>{date}</h3>
        </div>
        <div className="screenshot-container">
          <img
            className="screenshot-img page-image-bordered"
            src={screenshotUrls[0]}
          />
        </div>
        <div className="page-footer">{props.number}</div>
      </div>
    </div>
  );
});
