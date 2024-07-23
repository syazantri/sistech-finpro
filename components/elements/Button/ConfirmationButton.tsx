import React from "react";

type ConfirmationButtonProps = {
  yesText: string;
  yesLink: string;
  noText: string;
  noLink: string;
};

function ConfirmBtn({
  yesText,
  yesLink,
  noText,
  noLink,
}: ConfirmationButtonProps) {
  return (
    <div className="confirm-btn">
      <a href={yesLink} target="_blank" rel="noopener noreferrer">
        <button className="confirmYes-btn">{yesText}</button>
      </a>
      <a href={noLink} target="_blank" rel="noopener noreferrer">
        <button className="confirmNo-btn">{noText}</button>
      </a>
    </div>
  );
}

export { ConfirmBtn };