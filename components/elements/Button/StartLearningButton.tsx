import React, { ReactNode } from "react";

type StartButtonProps = {
  children: string;
  url: string;
};

function StartButton({ children, url }: StartButtonProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="start-btn">{children}</button>
      </a>
    </div>
  );
}

export { StartButton };
