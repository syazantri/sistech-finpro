import React from "react";

type CareerBtnProps = {
  children: string;
  onClick: () => void;
};

function CareerBtn({ children, onClick }: CareerBtnProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-colors-coursera rounded-lg text-colors-white font-semibold text-lg p-2 pr-8 pl-8"
      >
        {children}
      </button>
    </div>
  );
}

export { CareerBtn };
