import Image from "next/image";
import { useState } from "react";
import { Header, Footer, Sidebar, CategoryList, Input, Dropdown, Form, Disclosure , CourseCard, ConfirmationModal, CongratulationModal} from "../components";
import WelcomeSection from "../components/modules/HomeModule/WelcomeSection";

export default function Page() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [isCongratsVisible, setIsCongratsVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const toggleConfirmationVisibility = () => {
    setIsConfirmationVisible(!isConfirmationVisible);
  };

  const toggleCongratsVisibility = () => {
    setIsCongratsVisible(!isCongratsVisible);
  };

  const handleButtonClick = () => {
    toggleConfirmationVisibility();
    toggleFormVisibility();
  };

  const handleButtonClickYes = () => {
    toggleConfirmationVisibility();
    toggleCongratsVisibility();
  };

  const handleButtonClickNo = () => {
    toggleFormVisibility();
    toggleCongratsVisibility();
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="page-content justify-center">
          <div className="ml-16">
          <WelcomeSection onClicked={toggleFormVisibility} />
          </div>
          <div className="category-list mt-6">
          <CategoryList />
          </div>
          <p className="ml-12 mt-4 font-medium text-xl text-colors-black">Most Popular Courses</p>
          <div className="ml-12 mt-4 flex gap-3">
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"Nama Course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"Nama Course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          </div>
        </div>
      </div>
      
      {isFormVisible && (
        <div className="fixed inset-0 bg-colors-black/60 flex items-center justify-center z-20">
          <div className="bg-colors-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto pl-16 mt-8">
            <button
              onClick={toggleFormVisibility}
              className="font-semibold text-colors-coursera text-lg w-full text-end justify-end mb-2"
            >
              Set Up Later
            </button>
            <Form onClicked={handleButtonClick}/>
          </div>
        </div>
      )}

      {isConfirmationVisible && (
        <div className="fixed inset-0 bg-colors-black/60 flex items-center justify-center z-20">
          <div className="bg-colors-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto pl-16 mt-8">
            <button
              onClick={toggleConfirmationVisibility}
              className="font-semibold w-full text-end justify-end mb-2 ml-96"
            >
              <Image src="/images/x-circle.png" alt="Cross Icon" width="30" height="30" />
            </button>
            <ConfirmationModal onClickedYes={handleButtonClickYes} onClickedNo={handleButtonClick}/>
          </div>
        </div>
      )}

      {isCongratsVisible && (
        <div className="fixed inset-0 bg-colors-black/60 flex items-center justify-center z-20">
          <div className="bg-colors-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto pl-16 mt-8">
            
            <button
              onClick={toggleCongratsVisibility}
              className="font-semibold w-full text-end justify-end mb-2 ml-96"
            >
              <Image src="/images/x-circle.png" alt="Cross Icon" width="30" height="30" />
            </button>
            <CongratulationModal onClickedNo={handleButtonClickNo}/>
          </div>
        </div>
      )}
    </>
  );
}
