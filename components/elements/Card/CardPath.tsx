// Learning path card in learning path page
import React from "react";

type PathProps = {
  courseName: string;
  duration: string;
  videosCount: string;
};

function CardPath({ courseName, duration, videosCount }: PathProps) {
  return (
    <div className="card-path">
      <div className="path-content">
        <img src="/images/Rectangle_22.png" />
        <div className="path-text">
          <div className="path-title">
            <h3>{courseName}</h3>
          </div>
          <div className="path-info">
            <img src="/images/clock.png" />
            <p>
              {duration} · {videosCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { PathProps };
export { CardPath };
