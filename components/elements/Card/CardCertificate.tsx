import React from 'react';
import BookmarkButton from "../Button/BookmarkButton";

type CardCertificateProps = {
  thumbnail: string;
  courseName: string;
  certificateLabel: string; // ex: course, certificate, degrees
  companyName: string; // ex: google
  companyIcon: string;
};

function CertificateCard({
  thumbnail,
  courseName,
  certificateLabel,
  companyName,
  companyIcon,
}: CardCertificateProps) {
  return (
    <div className="card-course">
      <div className="course-content">
        <div className="course-thumbnail">
          <img src={thumbnail} alt={`${courseName} Thumbnail`} />
          <div className="thumbnail-btn">
            <BookmarkButton isBookmark={true} />
          </div>
        </div>
        <div className="certificate-title">
          <h3>{courseName}</h3>
          <h4>{certificateLabel}</h4>
        </div>
        <div className="company-info">
          <img src={companyIcon} alt={`${companyName} Icon`} />
          <h4>{companyName}</h4>
        </div>
      </div>
    </div>
  );
}

export type { CardCertificateProps };
export { CertificateCard };
