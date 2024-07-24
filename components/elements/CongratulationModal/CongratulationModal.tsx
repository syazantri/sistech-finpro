import Image from "next/image";
import { useState } from "react";
import { Input } from "../Input";
import { Dropdown } from "../Dropdown";
import { ResultBtn } from "../Button";

type ConfirmationModalProps = {
    onClickedNo: Function;
  };

function CongratulationModal({ onClickedNo }: ConfirmationModalProps) {
  return (
    <div className="form-container items-center bg-colors-white w-full h-full rounded-lg gap-2">
        <h2 className="font-bold text-colors-success text-3xl">Congrats!🎉</h2>
        <p className="font-light text-colors-black text-lg mt-3">Your career goal is....</p>
        <div  className="justify-center flex flex-1"><Image src="/images/image 19.png" alt="Softeng Image" width="232" height="162"/></div>
        
        <p className="font-bold text-colors-deepsea text-center text-xl mt-3">Software Engineering Trainee</p>
        <p className="font-light text-colors-black text-lg mt-3 text-sm">If this isn't quite right, you can go back and update your preferences.  Happy learning!</p>
        <div className="">
            <div className="submit-button-form mt-8 flex flex-1 justify-center">
                <ResultBtn editText="Edit Form" saveText="Save" onClickNo={onClickedNo} saveLink="/done-career"/>
            </div>
        </div>
    </div>
  );
}

export { CongratulationModal };