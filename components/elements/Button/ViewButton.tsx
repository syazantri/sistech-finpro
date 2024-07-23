import React, { ReactNode } from "react";

type ViewButtonProps = {
  children: string;
  url: string;
};

function ViewButton({ children, url }: ViewButtonProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="view-btn">{children}</button>
      </a>
    </div>
  );
}

export { ViewButton };