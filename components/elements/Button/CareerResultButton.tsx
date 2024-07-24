import React from "react";

type ResultButtonProps = {
  saveText: string;
  saveLink: string;
  editText: string;
  editLink: string;
};

function ResultBtn({
  saveText,
  saveLink,
  editText,
  editLink,
}: ResultButtonProps) {
  return (
    <div className="result-btn">
      <a href={saveLink} target="_blank" rel="noopener noreferrer">
        <button className="save-result-btn">{saveText}</button>
      </a>
      <a href={editLink} target="_blank" rel="noopener noreferrer">
        <button className="confirmNo-btn">{editText}</button>
      </a>
    </div>
  );
}

export { ResultBtn };
