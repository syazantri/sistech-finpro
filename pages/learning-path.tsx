import path from "path";
import { Header, Footer, Sidebar, CourseHeader, CardPath } from "../components";
import { StartButton } from "../components";
import React, { useEffect, useState } from "react";
import { type PathProps } from "../components";

function FetchFunc() {
  const [data, setData] = useState<PathProps[]>([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://sistech-finpro-db.vercel.app/api/data"
      );
      const json = await response.json();

      setData(
        json.data.map((item: any) => ({
          courseName: item.path,
          totalHours: item.totalHours,
          totalCourse: item.totalCourse,
          description: item.description,
        }))
      );
      console.log("data:", json.data.imgUrl);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
}

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="path-content max-w-5xl w-full justify-between flex-wrap items-center ml-5">
          <div className="">
            <h3 className="text-colors-deepsea font-roboto font-bold text-2xl mt-3">
              Software Engineer Training
            </h3>
            <div className="w-40 h-6 flex">
              <h4>84 hours · </h4>
              <h4>12 courses</h4>
            </div>
          </div>

          <div className="path-description max-w-5xl w-full mb-6 text-justify mr-32">
            <p>
              Software engineering is a disciplined approach to designing,
              developing, testing, and maintaining software applications. It
              ensures that software is reliable, efficient, and meets user
              requirements through a systematic process. This includes
              understanding user needs, designing solutions, writing code,
              testing rigorously, deploying software, and providing ongoing
              maintenance. It blends technical skills, creativity, and
              problem-solving abilities, essential for developing modern
              software systems. Whether you're interested in mobile apps, web
              platforms, or complex systems, software engineering offers endless
              opportunities to innovate. Take this learning path to guide you in
              handling complex projects, improving code quality, ensuring robust
              testing, and maintaining scalable and secure systems. Gain the
              skills and knowledge needed to excel in this dynamic field.
            </p>
          </div>
        </div>
        <div className="mt-5 mr-16">
          <StartButton children="Start Learning" url=""></StartButton>
        </div>
      </div>

      <div className="ml-24 mb-16 mt-10">
        <CardPath
          courseName="Introduction to Software Engineering"
          duration="6 hr 30 minutes"
          videosCount="6 videos"
        ></CardPath>
      </div>

      <Footer />
    </>
  );
}
