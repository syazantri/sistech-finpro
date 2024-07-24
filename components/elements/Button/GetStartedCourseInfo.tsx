import React, { ReactNode } from "react";

type GetStartedButtonProps = {
  children: string;
  url: string;
};

function GetStartedButton({ children, url }: GetStartedButtonProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="get-started-btn">{children}</button>
      </a>
    </div>
  );
}

export { GetStartedButton };
