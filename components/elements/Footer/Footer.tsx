import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="footer-top bg-colors-coursera flex justify-center">
        <div className="footer-cousera text-colors-white">
          <div className="footer-title font-bold">Coursera</div>
          <div className="footer-content flex pr-12">
            <div className="footer-coursera-1 mr-8">
              <p>About</p>
              <p>Leadership</p>
              <p>Careers</p>
              <p>Coursera Plus</p>
            </div>
            <div className="footer-coursera-2 mr-8">
              <p>Professional Certificates</p>
              <p>MasterTrack Certificates</p>
              <p>Degrees</p>
            </div>
            <div className="footer-coursera-3">
              <p>For Enterprise</p>
              <p>For Government</p>
              <p>For Campus</p>
            </div>
          </div>
        </div>
        <div className="footer-community">
          <div className="footer-title font-bold">Community</div>
          <div className="footer-content flex pr-12">
            <div className="mr-8">
              <p>Learners</p>
              <p>Partners</p>
              <p>Investors</p>
              <p>Beta Testers</p>
            </div>
            <div className="footer-community-2">
              <p>News & Articles</p>
              <p>Podcast</p>
              <p>Tech Blog</p>
              <p>Teaching Center</p>
            </div>
          </div>
        </div>
        <div className="footer-more pl-8">
          <div className="footer-title font-bold">More</div>
          <div className="footer-content flex pr-12">
            <div className="footer-more-1 mr-8">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Help</p>
              <p>Accessibility</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="footer-mobile">
          <div className="footer-title font-bold">Mobile App</div>
          <div className="footer-content flex">
            <div className="footer-mobile-1">
              <Image
                src="/images/img-mobile.png"
                alt="Mobile App"
                width="143"
                height="95"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-colors-white flex flex-row justify-between mt-4 mb-4">
        <div className="text-xs flex flex-1 justify-center">
          <div className="ml-24 place-self-center justify-self-center justify-items-center justify-center">
            <Image
              src="/images/logo-coursera.png"
              alt="Logo Coursera"
              width="158"
              height="49"
              className="ml-8"
            ></Image>
            <div className="font-light text-colors-grey">
              © 2024 Coursera Inc. All rights reserved.
            </div>
          </div>
        </div>
        <div className="footer-socmed flex mt-3 mr-8">
          <div className="pr-2">
            <Image
              src="/images/logo-facebook.png"
              alt="Logo Facebook"
              width="18"
              height="18"
            ></Image>
          </div>
          <div className="pr-2">
            <Image
              src="/images/logo-linkedin.png"
              alt="Logo Linkedin"
              width="18"
              height="18"
            ></Image>
          </div>
          <div className="pr-2 ">
            <Image
              src="/images/logo-instagram.png"
              alt="Logo Instagram"
              width="18"
              height="18"
            ></Image>
          </div>
          <div className="pr-2">
            <Image
              src="/images/logo-twitter.png"
              alt="Logo Twitter"
              width="18"
              height="18"
            ></Image>
          </div>
          <div className="pr-2">
            <Image
              src="/images/logo-youtube.png"
              alt="Logo Youtube"
              width="18"
              height="18"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export { Footer };
