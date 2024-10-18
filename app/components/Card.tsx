import React from 'react';

interface CardParams {
  size: "s" | "m" | "l" | "xl"
  title: string
  subtitle: string
  onclick: () => void
  icon: any

}



export default function Card({ size, title, subtitle, onclick, icon }: CardParams) {

  let sizeClasses = {
    s: 'col-span-1 row-span-1',
    m: 'col-span-2 row-span-1',
    l: 'col-span-3 row-span-1',
    xl: 'col-span-4 row-span-1'

  };


  return (
    <div className={`bg-neutral-700 shadow-md rounded-x1 ${sizeClasses[size]}`}>
      <div className="">
        <div className="">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-300">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="text-yellow-400 hover:underline flex items-center" >
          <span>Learn More</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

}
