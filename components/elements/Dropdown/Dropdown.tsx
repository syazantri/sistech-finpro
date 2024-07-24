import Image from "next/image";
import { useState } from "react";

type DropdownProps = {
  title: string;
  placeholder: string;
  inputChoices: string[];
};

function Dropdown({ title, placeholder, inputChoices }: DropdownProps) {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (choice: string) => {
    setInputValue(choice);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative justify-center items-center cursor-pointer">
      <div className="text-colors-darkgrey text-lg font-semibold">{title}</div>
      <div className="mt-2 searchbar outline outline-1 outline-colors-coursera outline-offset-4 rounded-md flex flex-row items-center justify-between max-w-96 cursor-pointer hover:cursor-pointer" onClick={handleDropdownToggle}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleDropdownToggle}
          placeholder={placeholder}
          className="text-lg text-colors-black font-light ml-4 pr-8 outline-none bg-transparent w-80 mt-1 mb-1 placeholder:text-colors-grey"
          readOnly
        />
        <Image src="/images/icon-disclosure-header.png" alt="Dropdown Icon" width="24" height="24" className="mr-4" />
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-colors-grey rounded-lg w-full shadow-lg max-w-96">
          {inputChoices.map((choice, index) => (
            <div
              key={index}
              className="px-4 py-2 text-colors-white cursor-pointer hover:bg-colors-darkgrey hover:rounded-lg"
              onClick={() => handleOptionClick(choice)}
            >
              {choice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Dropdown };
