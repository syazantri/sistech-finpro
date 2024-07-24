import { useState } from "react";
import Image from "next/image";
import { GetStartedDetail } from "../Button";

type DisclosureProps = {
  title: string;
  description: string;
};

function MaterialsDisclosure({
  title,
  description,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="justify-center flex flex-col items-center cursor-pointer mr-24 pt-4 max-w-11/12">
      <div
        className="disclosure-title font-semibold text-xl text-colors-black bg-colors-white w-full pt-3 pb-3 pl-3 flex flex-row"
        onClick={toggleDisclosure}
      >
        <Image
          src="/images/icon-materials.png"
          alt="Icon Arrow Disclosure"
          width="24"
          height="24"
          className={`mr-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <h4 className="">{title}</h4>
      </div>
      {isOpen && (
        <div className="disclosure-content bg-colors-white pl-12  w-full flex justify-between">
          <div>
          <div className="disclosure-detail flex items-center mt-3 mb-3">
            <Image
              src="/images/icon-materials-video.png"
              alt="Icon Materials Video"
              width="38"
              height="38"
              className="rounded-full mr-1"
            />
            <div >
            <p className="font-semibold text-sm text-colors-darkgrey mr-2 ml-3">
              Videos
            </p>
            <p className="font-light text-xs text-colors-darkgrey mr-2 ml-3">
              3 min
            </p>
            </div>
          </div>
          <div className="disclosure-detail flex items-center mt-5 mb-3">
            <Image
              src="/images/icon-materials-lab.png"
              alt="Icon Materials Video"
              width="38"
              height="38"
              className="rounded-full mr-1"
            />
            <div >
            <p className="font-semibold text-sm text-colors-darkgrey mr-2 ml-3">
              Hands-on Lab
            </p>
            <p className="font-light text-xs text-colors-darkgrey mr-2 ml-3">
              10 min
            </p>
            </div>
          </div>
          <div className="disclosure-detail flex items-center mt-5 mb-3">
            <Image
              src="/images/icon-materials-quiz.png"
              alt="Icon Materials Video"
              width="38"
              height="38"
              className="rounded-full mr-1"
            />
            <div >
            <p className="font-semibold text-sm text-colors-darkgrey mr-2 ml-3">
              Quiz
            </p>
            <p className="font-light text-xs text-colors-darkgrey mr-2 ml-3">
              15 min
            </p>
            </div>
          </div>
          </div>
          <div className="justify-end">
            <GetStartedDetail url="/course">Get Started</GetStartedDetail>
          </div>
          
        </div>
      )}
    </div>
  );
}

export { MaterialsDisclosure };
