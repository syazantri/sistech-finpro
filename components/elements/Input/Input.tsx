import Image from "next/image";
import { useState } from "react";

type InputProps = {
  imageUrl?: string;
  title: string;
  placeholder: string;
};

function Input({
  imageUrl,
  title,
  placeholder,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="justify-center items-center cursor-pointer">
        <div className="text-colors-darkgrey text-lg font-semibold ">{title}</div>
    <div className="mt-2 searchbar outline outline-1 outline-colors-coursera outline-offset-4 rounded-md flex flex-row items-center justify-between max-w-96">
        {imageUrl && (
          <div className="ml-4">
            <Image src={imageUrl} alt="Input Icon" width="24" height="24" />
          </div>
        )}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="text-lg text-colors-black font-light ml-4 pr-8 outline-none bg-transparent w-80 mt-1 mb-1 placeholder:text-colors-grey"
          />
        </div>
    </div>
  );
}

export { Input };