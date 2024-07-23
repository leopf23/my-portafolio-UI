import React from 'react'
import Image from 'next/image'
import CardSkills from './cardSkills'
import { skills } from './skillsData'

export default function Skill() {
  return (
    <div>
      <div className='absolute right-[90%]'>
        <Image
          src="/designs-text.svg"
          width={800}
          height={800}
          alt="Picture of the author"
        />
      </div>
      <p className="text-[1.5rem] mb-10 text-blue font-semibold">PROFESSIONAL SKILLS</p>
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
