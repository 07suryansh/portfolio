import React from 'react'

import appteam from '../images/appteam.png'
import gdsc from '../images/gdsc.png'
import srijan from '../images/srijan.png'

export default function Experience() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Experience
        </p>
    <div className = "flex flex-wrap justify-center pt-2">

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src={srijan} alt="" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-medium text-center">
            SRIJAN
          </p>
          <p className="mt-2 text-sm font-light text-center">
          October 2021 - present
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src={appteam} alt="" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-medium text-center">
            App team NITH
          </p>
          <p className="mt-2 text-sm font-light text-center">
          December 2021 - present
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img src={gdsc} alt="" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-medium text-center">
            GDSC NITH
          </p>
          <p className="mt-2 text-sm font-light text-center">
          August 2022 - Present
          </p>
        </div>
        

       
    </div>
  </div>
  )
}
