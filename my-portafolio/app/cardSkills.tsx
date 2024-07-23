import React from 'react'

interface IinfoProps{
    title:string;
    description:string;
}


export default function cardSkills(props: IinfoProps) {
  return (
    <div className='flex items-center content-center gap-7 p-[20px] rounded-md border-solid border-[1px] border-[#BAC3E3]'>

        {/* Icon */}
        <div>
            <p>P</p>
        </div>

        {/* Text */}
        <div>
            {/* Title */}
            <p className='text-[#5a5b5f] font-semibold'>{props.title}</p>
            {/* Description */}
            <p className='text-[0.8rem] text-[#818386] leading-7'>
            {props.description}
            </p>
        </div>
    </div>
  )
}
