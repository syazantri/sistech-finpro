import Image from "next/image";
import { useState } from "react";
import { Input } from "../Input";
import { Dropdown } from "../Dropdown";

function Form() {
  return (
    <div className="form-container items-center bg-colors-white w-full h-full rounded-lg gap-2">
        <p className="font-semibold text-colors-coursera text-lg w-full text-end justify-end">Set up Later</p>
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
        </div>
    </div>
  );
}

export { Form };