import React from 'react'
import Image from 'next/image'
import CardSkills from './cardSkills'
import { skills } from './skillsData'

export default function Skill() {
  return (
    <div>
      <div className='absolute right-[88%] bottom-[-25px]  2xl:bottom-[200px] 2xl:right-[91%]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="220" height="1124" viewBox="0 0 320 1124">
          <g id="letra_back" data-name="letra back" transform="translate(72.813 763.5) rotate(-90)">
            <text className='fill-white dark:fill-blueDark stroke-blueText ' id="DESIGNER" transform="translate(-359.5 175.187)" stroke-width="1" font-size="219" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" opacity="0.40"><tspan x="0" y="0">SKILLS</tspan></text>
          </g>
        </svg>
      </div>
      <p className="text-[1.5rem] mb-10 text-blue font-semibold dark:text-blueText ">PROFESSIONAL SKILLS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <CardSkills 
            key={index}
            title={skill.title}
            description={skill.description}
            imageSrc={skill.imageSrc} // Añadir la propiedad imageSrc aquí
          />
        ))}
      </div>
    </div>
  )
}
