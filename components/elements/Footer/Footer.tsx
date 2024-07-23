import BookmarkButton from "../Button/BookmarkButton";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="column-container">
          <div className="coursera">
            <h3>Coursera</h3>

            <div className="coursera-column">
              <div className="firstColumn">
                <a href="">About</a>
                <a href="">Leadership</a>
                <a href="">Careers</a>
                <a href="">Coursera Plus</a>
              </div>

              <div className="secondColumn">
                <a href="">Professional Certification</a>
                <a href="">MasterTrack Certificates</a>
                <a href="">Degrees</a>
              </div>

              <div className="thirdColumn">
                <a href="">For Enterprise</a>
                <a href="">For Government</a>
                <a href="">For Campus</a>
              </div>
            </div>
          </div>

          <div className="community">
            <h3>Community</h3>

            <div className="community-column">
              <div className="first-com-column">
                <a href="">Learners</a>
                <a href="">Partners</a>
                <a href="">Investors</a>
                <a href="">Beta Testers</a>
              </div>

              <div className="second-com-column">
                <a href="">News & Articles</a>
                <a href="">Podcast</a>
                <a href="">Tech Blog</a>
                <a href="">Teaching Center</a>
              </div>
            </div>
          </div>

          <div className="more">
            <h3>More</h3>
            <div className="more-column">
              <a href="">Terms</a>
              <a href="">Privacy</a>
              <a href="">Help</a>
              <a href="">Accessibility</a>
              <a href="">Contact</a>
            </div>
          </div>

          <div className="mobile-app">
            <h3>Mobile App</h3>
            <img src="/images/MobileApp.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="courseraLogo">
          <img src="/images/coursera.png"></img>
          <p>© 2024 Coursera Inc. All rights reserved.</p>
        </div>

        <div className="socmed">
          <a href="">
            <img src="/images/socmed/Facebook.png"></img>
          </a>
          <a href="">
            <img src="/images/socmed/Instagram.png"></img>
          </a>
          <a href="">
            <img src="/images/socmed/Linkedin.png"></img>
          </a>
          <a href="">
            <img src="/images/socmed/Twitter.png"></img>
          </a>
          <a href="">
            <img src="/images/socmed/Linkedin.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
