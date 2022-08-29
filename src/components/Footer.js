import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/backslashflutter">
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/suryansh-singh-bisen-297ba3138/">
              <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300" href="https://https://www.instagram.com/07suryansh/">
              <FaInstagram />
                <span className="sr-only">Twitter</span>  
              </a>
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-700 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="mailto:07suryansh@gmail.com">
              <FaRegEnvelope />
                <span className="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙</span>by<a className="text-blue-500 font-semibold hover:underline" href="mailto:me.shivansh007@gmail.com"> Suryansh Singh Bisen</a>
              </p>
              </div>
    </div>
  )
}

export default Footer