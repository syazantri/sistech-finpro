import React, { ReactNode } from "react";

type SubmitFormBtnProps = {
  children: string;
  url: string;
};

function SubmitFormBtn({ children, url }: SubmitFormBtnProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="submit-btn">{children}</button>
      </a>
    </div>
  );
}

export { SubmitFormBtn };
