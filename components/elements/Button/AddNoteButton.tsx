import React, { ReactNode } from "react";

type AddNoteProps = {
  children: string;
  url: string;
};

function AddNote({ children, url }: AddNoteProps) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="addNoteBtn"
      >
        <button className="add-note-btn">
          <img src="/images/pencil-square.png" />
          <h4>{children}</h4>
        </button>
      </a>
    </div>
  );
}

export { AddNote };