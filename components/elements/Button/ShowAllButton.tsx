import React, { ReactNode } from "react";

type ShowAllBtnProps = {
  children: string;
  url: string;
};

function ShowBtn({ children, url }: ShowAllBtnProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="show-btn">{children}</button>
      </a>
    </div>
  );
}

export { ShowBtn };
