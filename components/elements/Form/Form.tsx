import Image from "next/image";
import { useState } from "react";
import { Input } from "../Input";
import { Dropdown } from "../Dropdown";
import { SubmitFormBtn } from "../Button";

type FormProps = {
    onClicked: () => void; // Updated type for the onClicked prop
};

function Form({ onClicked }: FormProps) {
  return (
    <div className="form-container items-center bg-colors-white w-full h-full rounded-lg gap-2">
        <h2 className="font-bold text-colors-deepsea text-3xl">Help us personalize your experience🚀</h2>
        <p className="font-light text-colors-darkgrey text-lg">Fill out the information below to receive recommendations for courses that fit your interests and goals. Coursera will never share this personal information with third parties.</p>
        <div className="">
            <div className="form-inputs">
                <Dropdown title="Learning Goal" 
                    placeholder="What’s your learning goal?" 
                    inputChoices={["Kickstart my career", "Develop skills for my current role", "Expands my skills and career", "Just want to explore"]}/>
            </div>
            <div className="form-inputs">
                <Input title="Current Role" placeholder="eg. Student, Doctor, Data Scientist" imageUrl=""/>
            </div>
            <div className="form-inputs">
                <Dropdown title="Experience Level" 
                    placeholder="What’s your experience level of work?" 
                    inputChoices={["Intern / Trainee", "Junior / Entry Level (0-2 years experience)", "Lead / Manager", "Senior Manager / Director", "Executive"]}/>
            </div>
            <div className="form-inputs">
                <Input title="Desired Role" placeholder="eg. UI / UX Designer, Back-end Engineer" imageUrl=""/>
            </div>
            <div className="form-inputs">
                <Input title="New Skills of Interest" placeholder="eg. Research and Design, Python" imageUrl="/images/icon-form-search.png"/>
            </div>
            <div className="submit-button-form mt-8 flex flex-1 justify-center">
                <SubmitFormBtn onClick={onClicked}>Submit</SubmitFormBtn>
            </div>
        </div>
    </div>
  );
}

export { Form };