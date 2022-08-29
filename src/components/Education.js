import React from 'react'


import nith from '../images/NITH.png'
import kv from '../images/KV.png'


export default function Education() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
    <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
      Education
    </p>
<div className = "flex flex-wrap justify-center pt-2">

    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
      <img src={nith} alt="" className="mx-auto text-4xl" />
      <p className="mt-6 text-base font-light text-center">
        National Institute of Technology Hamirpur
      </p>
    </div>

    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
      <img src={kv} alt="" className="mx-auto text-4xl" />
      <p className="mt-6 text-base font-light text-center">
        Kendriya Vidyalaya IIT Kanpur
      </p>
    </div>

    <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
      <img src={kv} alt="" className="mx-auto text-4xl" />
      <p className="mt-6 text-base font-light text-center">
      Kendriya Vidyalaya IIT Kanpur
      </p>
    </div>
    
</div>
</div>
  )
}
