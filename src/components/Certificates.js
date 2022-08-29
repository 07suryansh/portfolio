import React from 'react'
import c1 from '../images/certificates/c1.png'
import c2 from '../images/certificates/c2.png'
import c3 from '../images/certificates/c3.png'
import c4 from '../images/certificates/c4.png'
import c5 from '../images/certificates/c5.png'
import c6 from '../images/certificates/c6.png'

export default function Certificates() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Projects
        </p>
    <div className = "flex flex-wrap justify-center pt-2 snap-x">
        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c1} alt="" />
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c2} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c3} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c4} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c5} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={c6} alt="" />
          
        </div>



    </div>
  </div>
  )
}
