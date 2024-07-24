import Image from "next/image";
import { useState } from "react";
import { Header, Footer, Sidebar, CategoryList, Input, Dropdown, Form, Disclosure , CourseCard, ViewButton, ShowBtn} from "../components";
import WelcomeSection from "../components/modules/HomeModule/WelcomeSection";

export default function DoneCareer() {
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
        <div className="welcome-container rounded-b-2xl bg-colors-grey/10 flex flex-col pr-16 pl-12 pb-8 ml-4">
      <h4 className="font-medium text-xl text-colors-black mt-4">Your Learning Path</h4>
        <div className="flex gap-2 items-center mt-3">
            <div className="image-lp-section">
            <Image src="/images/image 19.png" alt="Softeng Image" width="136" height="95"/>
            </div>
            <div className="content-lp-section">
                <p className="text-colors-black/60 font-medium text-sm">Your career goal is</p>
                <h4 className="text-colors-deepsea font-bold text-lg">Software Engineer Training</h4>
                <div className="flex gap-2">
                    <Image src="/images/clock.png" alt="clock" width="17" height="17" />
                    <p className="font-light text-colors-grey text-xs">60hrs · 12 courses</p>
                </div>
            </div>
            <div className="button-lp-section justify-end ml-64">
                <ViewButton url="/course/learning-path">View</ViewButton>
            </div>
        </div>
        <h4 className="font-medium text-xl text-colors-black mt-6">Course For You</h4>
          <div className="flex gap-3 mt-3">
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"Nama Course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          <CourseCard thumbnail={"/images/dumbthumbnail.png"} courseName={"Nama Course"} courseLabel={"Nama Course"} companyName={"zenius"} companyIcon={"/images/logo-coursera.png"} />
          </div>
          <div className="mt-4 justify-center flex flex-1">
            <ShowBtn url="/course/course-for-you">Show 9 more</ShowBtn>
          </div>
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
      
      
    </>
  );
}
