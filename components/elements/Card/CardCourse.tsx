// Course Card in Dashboard
import BookmarkButton from "../Button/BookmarkButton";

type CardCourseProps = {
  thumbnail: string;
  courseName: string;
  courseLabel: string; // ex: course, certificate, degrees
  companyName: string; // ex: google
  companyIcon: string;
};

interface BookmarkButtonProps {
  isBookmark: boolean;
}

function CourseCard({
  thumbnail,
  courseName,
  courseLabel,
  companyName,
  companyIcon,
}: CardCourseProps) {
  return (
    <div className="card-course">
      <div className="course-content">
        <div className="course-thumbnail">
          <img src={thumbnail}></img>
          <div className="thumbnail-btn">
            <BookmarkButton isBookmark={true} />
          </div>
        </div>
        <div className="course-title">
          <h3>{courseName}</h3>
          <h4>{courseLabel}</h4>
        </div>
        <div className="company-info">
          <img src={companyIcon}></img>
          <h4>{companyName}</h4>
        </div>
      </div>
    </div>
  );
}

export type { CardCourseProps };
export { CourseCard };
export default BookmarkButton;
