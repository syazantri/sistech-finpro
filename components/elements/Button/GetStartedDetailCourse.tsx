import React, { ReactNode } from "react";

type GetStartedCourseButtonProps = {
  children: string;
  url: string;
};

function GetStartedDetail({ children, url }: GetStartedCourseButtonProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="get-started-btn">{children}</button>
      </a>
    </div>
  );
}

export { GetStartedDetail };