import Image from "next/image";
import { Input } from "../Input";
import { Dropdown } from "../Dropdown";
import { ConfirmBtn } from "../Button";

type ConfirmationModalProps = {
  onClickedYes: () => void;
  onClickedNo: () => void;
};

function ConfirmationModal({ onClickedYes, onClickedNo }: ConfirmationModalProps) {
  return (
    <div className="form-container items-center bg-colors-white w-full h-full rounded-lg gap-2">
      <h2 className="font-bold text-colors-warning text-3xl">Confirmation</h2>
      <p className="font-light text-colors-darkgrey text-lg mt-3">Make sure all the data is correct. Do you want to proceed?</p>
      <div className="submit-button-form mt-8 flex flex-1 justify-center">
        <ConfirmBtn yesText="Yes" noText="No" onClickNo={onClickedNo} onClickYes={onClickedYes} />
      </div>
    </div>
  );
}

export { ConfirmationModal };
