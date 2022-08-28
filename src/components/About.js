import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'


function About() {
  return (
    <div>
     
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Hey 👋  
        </p>
        <p className="text-base text-left md:text-left text-gray-500 leading-relaxed mt-4 justify-center">
        This is Suryansh Singh Bisen.
I am pre-final year student at National Institute of Technology Hamirpur. I am member of UI/UX in Google Developer Student Club NITH and Frontend and UI/UX team in App Team NITH. I work in C++, Java, Javascript, ReactJs, HTML, Tailwind CSS and Bootstrap. I have experience in Web development, Android development and Graphic designing. Currently I am learning DSA.

Apart from technical, I love to play cricket, football, chess etc. and I also like Drawing and solving rubiks cube.
        </p>

      
      
      </div>
      
      
      <ScrollIntoView selector = "#tech">

        <div className='mx-auto p-20'>
          
           <FaChevronDown className= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView>
    </div>
  )
}

export default About

