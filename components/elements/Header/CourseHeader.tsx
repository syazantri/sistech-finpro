import React from "react";
import Image from "next/image";

type CourseHeaderProps = {
    courseTitle: String;
  };

function CourseHeader({ courseTitle }: CourseHeaderProps) {
  return (
    <div className="course-header shadow bg-colors-deepsea h-fit top-127 left-0 right-0 w-full rounded-lg text-colors-white font-roboto">
      <div className="flex bg-invert justify-between items-center h-full mx-auto ml-5 pt-1 pb-1 m-auto">
        <div className="flex items-center p-1">
          <Image
            src="/images/image-course.png"
            alt="Course Icon"
            width="50"
            height="50"
          />
          <div className="flex flex-col ml-4">
            <h3 className="font-bold text-xl">{courseTitle}</h3>
            <h4 className="font-semibold text-xs">Google</h4>
          </div>
        </div>
        <div className="flex items-center gap-10 mr-5">
          <Image
            src="/images/icon-book.png"
            alt="Icon Book"
            width="38"
            height="38"
            className="hover:cursor-pointer"
          />
          <Image
            src="/images/icon-comment.png"
            alt="Icon Comment"
            width="38"
            height="38"
            className="hover:cursor-pointer"
          />
          <Image
            src="/images/icon-edit.png"
            alt="Icon Edit"
            width="38"
            height="38"
            className="hover:cursor-pointer"
          />
          <Image
            src="/images/icon-graph.png"
            alt="Icon Graph"
            width="38"
            height="38"
            className="hover:cursor-pointer"
          />
          <Image
            src="/images/icon-info.png"
            alt="Icon Graph"
            width="38"
            height="38"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export { CourseHeader };