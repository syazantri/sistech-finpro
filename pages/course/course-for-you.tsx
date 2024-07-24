import Image from "next/image";
import { useState } from "react";
import { Header, Footer, Sidebar, CategoryList, Input, Dropdown, Form, Disclosure, CourseCard, ConfirmationModal, CongratulationModal } from "../../components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Syllabus = {
  syllabusId: number;
  syllabusName: string;
  syllabusContent: string;
  learningObjectives: string[];
  materials: {
    materialsId: number;
    materialsName: string;
    videoUrl: string;
  }[];
};

type Course = {
  courseId: number;
  courseName: string;
  courseContent: string;
  imgUrl: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  syllabuses: Syllabus[];
};

type CoursePageProps = {
  course?: Course;  // Make it optional if not always provided
  courses: Course[];
  courses2: Course[];  // Add courses2 here
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { courseId } = context.params!;
  const res = await fetch(`https://sistech-finpro-db.vercel.app/api/data`);
  const data = await res.json();
  // const course = data.data[0].courses.find((course: Course) => course.courseId === parseInt(courseId as string));
  const courses = data.data[0].courses;
  const courses2 = data.data[1].courses;

  return {
    props: {
      courses2,
      courses,
    },
  };
};

export default function CourseForYouPage({ courses, course, courses2 }: CoursePageProps) {
  const router = useRouter();

  const handleKeCourse = (courseId: number) => {
    router.push(`/course/${courseId}`);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="page-content justify-center">
          <h3 className="font-bold ml-20 mt-4 text-2xl text-colors-deepsea">Course For You</h3>
          <div className="ml-12 mt-4 flex gap-3">
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ml-16">
            {courses.map((course) => (
              <CourseCard
                key={course.courseId}
                thumbnail={course.imgUrl}
                courseName={course.courseName}
                courseLabel='course'
                companyName={course.instructorName}
                companyIcon='/images/instructor-avatar-1.png'
                keCourse={() => handleKeCourse(course.courseId)}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ml-16">
            {courses2.map((course) => (
              <CourseCard
                key={course.courseId}
                thumbnail={course.imgUrl}
                courseName={course.courseName}
                courseLabel={course.courseName}
                companyName={course.instructorName}
                companyIcon={course.instructorAvatar}
                keCourse={() => handleKeCourse(course.courseId)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
