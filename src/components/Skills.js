import React from 'react'

import { SiCplusplus } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { SiJava } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';


function Skills() {
  return (

    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Tech I Use 
        </p>
    

    <div className = "flex flex-wrap justify-center pt-2">
        
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCplusplus color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            C++
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJava color="#035397" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            Java
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiKotlin color="#AB46D2" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            Kotlin
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPython color="#FBCB0A" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            Python
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-light text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiBootstrap color="#764AF1" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
          Bootstrap
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#66BFBF" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-light text-center">
            TailwindCSS
          </p>
        </div>
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiHtml5 color="#EB4747" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            HTML5
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCss3 color="#3120E0" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            CSS3
          </p>
        </div>
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            JavaScript
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaGitAlt color="#D1512D" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-light text-center">
            Git
          </p>
        </div>
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNpm color="#C21010" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            npm
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-red-400 shadow-2xl rounded-xl sm:w-52">
          <SiAdobeillustrator color="#820000" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
          Adobe illustrator
          </p>
        </div>
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-blue-400 shadow-2xl rounded-xl sm:w-52">
          <SiAdobephotoshop color="#293462" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
          Adobe photoshop
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-indigo-400 shadow-2xl rounded-xl sm:w-52">
          <FiFigma color="#541690" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl font-light text-center">
            Figma
          </p>
        </div>
       
    </div>
  </div>
  )
}

export default Skills
