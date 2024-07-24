import React from "react";

type ConfirmationButtonProps = {
  yesText: string;
  noText: string;
  onClickYes: () => void;
  onClickNo: () => void;
};

function ConfirmBtn({
  yesText,
  onClickYes,
  noText,
  onClickNo,
}: ConfirmationButtonProps) {
  return (
    <div className="confirm-btn">
     
        <button className="confirmYes-btn" onClick={onClickYes}>{yesText}</button>
 
    
        <button className="confirmNo-btn" onClick={onClickNo}>{noText}</button>

    </div>
  );
}

export { ConfirmBtn };