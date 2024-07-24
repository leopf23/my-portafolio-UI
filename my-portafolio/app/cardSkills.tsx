import React from 'react';
import Image from 'next/image';

interface IinfoProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function CardSkills(props: IinfoProps) {
  return (
    <div className='flex items-center content-center gap-5 p-[15px] rounded-md border-solid border-[1px] border-[#BAC3E3] dark:border-slate-700'>
      {/* Icon */}
      <div>
        <Image
          src={props.imageSrc}
          width={50}
          height={50}
          alt={props.title}
        />
      </div>
      
      {/* Text */}
      <div>
        {/* Title */}
        <p className='text-[#5a5b5f] dark:text-white text-[0.9rem] font-medium'>{props.title}</p>
        {/* Description */}
        <p className='text-[0.8rem] dark:text-gray-400 text-[#818386] leading-7'>
          {props.description}
        </p>
      </div>
    </div>
  );
}
