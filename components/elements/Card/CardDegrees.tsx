// Course Card in Dashboard
import BookmarkButton from "../Button/BookmarkButton";

type CardDegreesProps = {
  thumbnail: string;
  courseName: string;
  degreesLabel: string; // ex: course, certificate, degrees
  companyName: string; // ex: google
  companyIcon: string;
};

interface BookmarkButtonProps {
  isBookmark: boolean;
}

function DegreesCard({
  thumbnail,
  courseName,
  degreesLabel,
  companyName,
  companyIcon,
}: CardDegreesProps) {
  return (
    <div className="card-course">
      <div className="course-content">
        <div className="course-thumbnail">
          <img src={thumbnail}></img>
          <div className="thumbnail-btn">
            <BookmarkButton isBookmark={true} />
          </div>
        </div>
        <div className="degrees-title">
          <h3>{courseName}</h3>
          <h4>{degreesLabel}</h4>
        </div>
        <div className="company-info">
          <img src={companyIcon}></img>
          <h4>{companyName}</h4>
        </div>
      </div>
    </div>
  );
}

export type { CardDegreesProps };
export { DegreesCard };