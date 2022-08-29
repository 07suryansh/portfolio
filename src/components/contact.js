import { FaArrowRight } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-36 pb-10" id="contactme">
      <h1 className="text-4xl">Contact</h1>
      <a href="mailto:07suryansh@gmail.com">
        <span className="mt-10 inline-block w-auto bg-black font-display rounded-xl text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Mail</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
      
      <SiWhatsapp color="green" className="mx-auto text-4xl mt-6" />
          <p className="mt-2 text-xl font-light text-center">
            +91 9889666781
          </p>
      
    </div>
  );
}