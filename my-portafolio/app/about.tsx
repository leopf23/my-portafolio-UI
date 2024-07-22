import React from 'react'

export default function About() {
  return (
    <div className='text-[1.1rem]'>
        <div className='text-gray-500 text-[0.9rem] md:text-lg mb-2'>
          <span className='text-[#03249C]'>HELLO, </span> MY NAME IS
        </div>

        <div className='mb-2 text-[#03249C] font-bold md:text-[3rem] text-[2rem]'>
         <span>LEONARDO</span> <span className='text-stroke-1 text-white text-stroke-blue scroll-snap-stop-always'>PÉREZ</span>
          <p className='mt-2 md:mt-0 text-[0.9rem] md:text-[1.1rem] font-normal relative bottom-2'>Im, UX / UI Designer</p>
        </div>



        <div className='mb-5 font-light text-[1rem] text-[#747579] w-[10%] md:w-[10%] xl:w-[22%] leading-8'>
        Soy Diseñador UI/UX Con más de 5 años de experiencia en diseño UI/UX, me dedico a crear experiencias de usuario excepcionales.
        También tengo habilidades en front-end, lo que me permite transformar diseños en
        aplicaciones funcionales y optimizadas, mejorando así la satisfacción del usuario final.
        </div>

        <div>
        <button
        type="button"
        className="rounded-md bg-white px-7 py-3.5 text-[0.8rem] font-normal text-blue shadow-sm ring-[0.6px] ring-inset ring-blue hover:bg-blue hover:text-white"
      >
        DOWNLOAND CV
      </button>
        </div>
    </div>
  )
}
