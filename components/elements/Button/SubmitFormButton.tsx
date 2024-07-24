import React, { ReactNode } from "react";

type SubmitFormBtnProps = {
  children: string;
  onClick: () => void;
};

function SubmitFormBtn({ children, onClick }: SubmitFormBtnProps) {
  return (
    <div>
        <button className="submit-btn" onClick={onClick}>{children}</button>
    </div>
  );
}

export { SubmitFormBtn };