import { CareerBtn } from "../../elements";

type WelcomeSectionProps = {
  onClicked: () => void; // Specify the function type here
};

export default function WelcomeSection({ onClicked }: WelcomeSectionProps) {
  return (
    <>
      <div className="welcome-container bg-colors-lightblue rounded-b-3xl flex flex-col justify-center items-center text-center pr-12 pl-12 pb-8 w-11/12">
        <div className="w-8/12 justify-center">
          <div className="welcome-content font-semibold text-lg text-colors-white mt-6">
            Hello, <span className="font-bold text-2xl text-gradient">John</span>!👋
          </div>
          <div className="welcome-content font-semibold text-lg text-colors-white mb-8">
            You haven’t set your career goal yet, please set up so we can personalize your experience✨
          </div>
        </div>
        <CareerBtn onClick={onClicked}>Set Career Goal</CareerBtn>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
          --tw-gradient-from: #1a73e8; 
          --tw-gradient-to: #202124;  
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
