import React from "react";
import profile from "../images/image.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card() {

  const openInNewTab=url=>{
    window.open(url,'_blank','noopener,noreferrer');
}


  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5">
        <div className="">
          <img
            className="w-48 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Suryansh Singh Bisen
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Web Developer / App Developer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/07suryansh"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/suryansh-singh-bisen-297ba3138/"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://https://www.instagram.com/07suryansh/"
            >
              <FaInstagram />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-700 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              href="mailto:07suryansh@gmail.com"
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <button className="mx-auto mt-2 py-1 px-4 rounded-lg drop-shadow-sm text-black border-solid border-2 border-blue-500  hover:text-white hover:bg-blue-500
        transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200"
        onClick={()=>openInNewTab("https://drive.google.com/file/d/1TQ1ObIeRttk_kCQzgkxZ2T5RjLSLMqlL/view?usp=sharing")}
        >Resume</button>
      </div>
    </div>
  );
}

export default Card;
