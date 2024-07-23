import { useState } from "react";
import Image from "next/image";

type DisclosureProps = {
  title: string;
  description: string;
  videoCount: string;
  readingCount: string;
};

function Disclosure({
  title,
  description,
  videoCount,
  readingCount,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-center flex flex-col items-center cursor-pointer ml-24 mr-24">
      <div
        className="disclosure-title font-bold text-xl text-colors-white bg-colors-lightblue w-full pt-3 pb-3 flex flex-row justify-between"
        onClick={toggleDisclosure}
      >
        <h4 className="ml-5">{title}</h4>
        <Image
          src="/images/icon-arrow-disclosure.png"
          alt="Icon Arrow Disclosure"
          width="24"
          height="24"
          className={`mr-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="disclosure-content bg-colors-white rounded-lg shadow-md pl-4 p-4">
          <p className="disclosure-desc text-sm font-light text-colors-black">
            {description}
          </p>
          <div className="disclosure-detail flex items-center mt-3 mb-3">
            <Image
              src="/images/icon-disclosure-doc.png"
              alt="Icon Disclosure Doc"
              width="24"
              height="24"
              className="rounded-full mr-1"
            />
            <p className="font-light text-sm text-colors-darkgrey mr-2">
              {videoCount} videos, {readingCount} reading
            </p>
          </div>
          <div className="font-semibold text-base text-colors-coursera">
            See More
          </div>
        </div>
      )}
      <p className="text-colors-black font-medium text-sm text-center justify-center max-w-28 items-center mt-2">
        {title}
      </p>
    </div>
  );
}

export { Disclosure };
