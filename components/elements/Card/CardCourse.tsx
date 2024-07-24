import React from 'react';
import BookmarkButton from "../Button/BookmarkButton";

type CardCourseProps = {
  thumbnail: string;
  courseName: string;
  courseLabel: string; // ex: course, certificate, degrees
  companyName: string; // ex: google
  companyIcon: string;
  keCourse: () => void;
};

function CourseCard({
  thumbnail,
  courseName,
  courseLabel,
  companyName,
  companyIcon,
  keCourse,
}: CardCourseProps) {
  return (
    <div className="card-course cursor-pointer" onClick={keCourse}>
      <div className="course-content">
        <div className="course-thumbnail">
          <img src={thumbnail} alt={`${courseName} Thumbnail`} />
          <div className="thumbnail-btn">
            <BookmarkButton isBookmark={true} />
          </div>
        </div>
        <div className="course-title">
          <h3>{courseName}</h3>
          <h4>{courseLabel}</h4>
        </div>
        <div className="company-info">
          <img width="23" height="23" src={companyIcon} alt={`${companyName} Icon`} />
          <h4>{companyName}</h4>
        </div>
      </div>
    </div>
  );
}

export type { CardCourseProps };
export { CourseCard };
