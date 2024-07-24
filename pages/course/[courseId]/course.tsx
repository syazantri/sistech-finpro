import Image from "next/image";
import { useState } from "react";
import { Header, Footer, Sidebar, CategoryList, Input, Dropdown, Form, Disclosure , CourseCard, ConfirmationModal, CongratulationModal} from "../components";
import WelcomeSection from "../components/modules/HomeModule/WelcomeSection";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="page-content justify-center">
          <h3 className="font-bold text-2xl text-colors-deepsea">About This Course</h3>
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
