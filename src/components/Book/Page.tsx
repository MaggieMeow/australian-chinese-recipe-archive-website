import React, {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.scss";

export const Page = forwardRef<
  HTMLDivElement,
  {
    number: number;
    title: string;
    coverImageUrl: string;
    content: string;
    children?: ReactNode;
  }
>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.title}</h2>
        <div className="page-image-wrap">
          <img className="page-image" src={props.coverImageUrl} />
        </div>
        <div className="page-text">{props.content}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

export const PageCover = forwardRef<HTMLDivElement, { children?: ReactNode }>(
  (props, ref) => {
    return (
      <div className="page page-cover" data-density="hard" ref={ref}>
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  }
);
