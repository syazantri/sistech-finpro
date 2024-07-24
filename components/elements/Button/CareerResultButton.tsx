
import React from "react";

type ResultButtonProps = {
  saveText: string;
  saveLink: string;
  editText: string;
  onClickNo: () => void;
};

function ResultBtn({
  saveText,
  saveLink,
  editText,
  onClickNo,
}: ResultButtonProps) {
  return (
    <div className="result-btn">
      <a href={saveLink} target="_blank" rel="noopener noreferrer">
        <button className="save-result-btn">{saveText}</button>
      </a>
        <button className="confirmNo-btn" onClick={onClickNo}>{editText}</button>
    </div>
  );
}

export { ResultBtn };