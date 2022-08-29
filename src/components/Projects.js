import React from 'react'
import p1 from '../images/Project Img/p1.png'
import p2 from '../images/Project Img/p2.png'
import p3 from '../images/Project Img/p3.png'
import p4 from '../images/Project Img/p4.png'
import p5 from '../images/Project Img/p5.png'
import p6 from '../images/Project Img/p6.png'
import p7 from '../images/Project Img/p7.png'

export default function Projects() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Projects
        </p>
    <div className = "flex flex-wrap justify-center pt-2 snap-x">
        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
          <img src={p1} alt="" />
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p2} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p3} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p4} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p5} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p6} alt="" />
          
        </div>

        <div className="flex flex-col w-40 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-96 snap-center">
        <img src={p7} alt="" />
          
        </div>



    </div>
  </div>
  )
}
