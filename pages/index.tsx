import { useState } from "react";
import {
  Header,
  Footer,
  Sidebar,
  CategoryList,
  Input,
  Dropdown,
  Form,
  Disclosure,
  CourseCard,
} from "../components";

export default function Page() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <button
          onClick={toggleFormVisibility}
          className="fixed top-4 left-4 z-10 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Set Career Goal
        </button>
        <Sidebar />
        <div className="page-content justify-center">
          <Input
            imageUrl=""
            title="Current Role"
            placeholder="eg. Student, Doctor, Data Scientist"
          />
          <Dropdown
            title="Learning Goal"
            placeholder="What’s your learning goal?"
            inputChoices={[
              "Kick-start my career",
              "Develop skills for my current role",
            ]}
          />
          <CategoryList />
          <CourseCard
            thumbnail={"/images/dumbthumbnail.png"}
            courseName={"Nama Course"}
            courseLabel={"Nama Course"}
            companyName={"zenius"}
            companyIcon={"/images/logo-coursera.png"}
          />
        </div>
      </div>
      <Disclosure
        title="Basics of Java"
        description="This module teaches the basics of Java and begins by exploring some of the different data types such as integers, floating-point numbers, and strings. Continue with the module and learn how to use expressions in mathematical operations, store values in variables, and the many different ways to manipulate strings."
        videoCount="6"
        readingCount="1"
      />
      <Footer />

      {isFormVisible && (
        <div className="fixed inset-0 bg-colors-black/60 flex items-center justify-center z-20">
          <div className="bg-colors-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-full overflow-y-auto pl-12 pr-12">
            <Form />
            <button
              onClick={toggleFormVisibility}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
