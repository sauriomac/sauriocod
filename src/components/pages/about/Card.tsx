import React from 'react';
import img from '../../../asset/steve_jobs.jpg'

const Card = () => {
  return <div className="border border-3 rounded-[20px] m-2 ">
      <figure className=" p-10 m-6 bg-indigo-900 rounded-[20px] shadow-2xl">
  <img className="w-40 h-40 rounded-full  " src={img} alt="" width="400" height="560"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 animate-gradient-x">
        Rodrigo Espinoza
      </div>
      <div className="text-white">
        Ceo, Full Stack
      </div>
     
      
    </figcaption>
  </div>
</figure>
  </div>;
};

export default Card;
