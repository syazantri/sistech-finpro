import React, { ReactNode } from "react";

type SetCareerBtnProps = {
  children: string;
  url: string;
};

function CareerBtn({ children, url }: SetCareerBtnProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="career-btn">{children}</button>
      </a>
    </div>
  );
}

export { CareerBtn };
