import { Header, Footer, Sidebar, CourseHeader, CardPath } from "../components";
import { StartButton } from "../components";
import React, { useEffect, useState } from "react";

type LearningPathProps = {
  pathId: number;
  pathName: string;
  description: string;
  totalHours: number;
  totalMinutes: number;
  totalCourses: number;
  courses: CourseProps[];
};

type CourseProps = {
  courseId: number;
  courseName: string;
  courseContent: string;
  courseImg: string;
};

export default function Page() {
  const [data, setData] = useState<LearningPathProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://sistech-finpro-db.vercel.app/api/data"
        );
        const json = await response.json();

        if (json.data && json.data.courses) {
          setData({
            pathId: json.data.id,
            pathName: json.data.path,
            description: json.data.description,
            totalHours: json.data.totalHours,
            totalMinutes: json.data.totalMinutes,
            totalCourses: json.data.totalCourses,
            courses: json.data.courses.map((course: any) => ({
              courseId: course.id,
              courseName: course.name,
              courseContent: course.content,
              courseImg: course.imgUrl,
            })),
          });
        } else {
          console.error("Invalid data structure:", json);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="path-content max-w-5xl w-full justify-between flex-wrap items-center ml-5">
          <div className="">
            <h3 className="text-colors-deepsea font-roboto font-bold text-2xl mt-3">
              {data.pathName}
            </h3>
            <div className="w-40 h-6 flex">
              <h4>{data.totalHours}hrs </h4>
              <h4>{data.totalCourses} courses</h4>
            </div>
          </div>

          <div className="path-description max-w-5xl w-full mb-6 text-justify mr-32">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="mt-5 mr-16">
          <StartButton children="Start Learning" url="" />
        </div>
      </div>

      <div className="ml-24 mb-16 mt-10">
        {data.courses.map((course) => (
          <CardPath
            key={course.courseId}
            courseName={course.courseName}
            duration="6 hr 30 minutes"
            videosCount="6 videos"
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
