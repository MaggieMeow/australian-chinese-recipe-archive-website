import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { recipes } from "../../data/recipes";

import "./styles.scss";

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
    screenshotUrl,
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
              <span className="page-tag">
                {tag} {index < tags.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        )}
        <div className="page-text">
          <img className="page-image page-image-bordered" src={coverImageUrl} />
          <p>{content}</p>
          <img className="page-screenshot" src={screenshotUrl} />
          <a className="book-button lined" href={troveUrl} target="blank">
            <span>View on</span>
            <img src="trove-colour.svg" />
          </a>
        </div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

export const PageCover = forwardRef<HTMLDivElement, { children?: ReactNode }>(
  (props, ref) => {
    return (
      <div className="page page-cover" data-density="hard" ref={ref}>
        <div className="page-content">{props.children}</div>
      </div>
    );
  }
);
