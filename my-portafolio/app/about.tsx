import React, { useState } from 'react';



export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? '#03249C' : 'white',
    color: isHovered ? 'white' : '#03249C',
    border: '1px solid #03249C',
    padding: '0.875rem 1.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.8rem',
    fontWeight: 'normal',
    transition: 'box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease',
    boxShadow: isHovered ? '0 4px 8px rgba(3, 36, 156, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
  };

  return (
    <div className='text-[1.1rem]'>
        <div className='text-gray-500 text-[0.9rem] font-medium md:text-lg mb-2'>
          <span className='text-[#03249C]'>HELLO, </span> MY NAME IS
        </div>

        <div className='mb-2 text-[#03249C] font-bold md:text-[3.7rem] text-[2rem]'>
         <span>LEONARDO</span> <span className='text-stroke-1 text-white text-stroke-blue scroll-snap-stop-always'>PÉREZ</span>
          <p className='mt-2 md:mt-0 text-[0.9rem] md:text-[1.1rem] font-normal relative bottom-2'>Im, UX / UI Designer</p>
        </div>

        <div className='mb-5 font-light text-[1rem] text-[#747579] w-[100%] md:w-[90%] xl:w-[60%] leading-8'>
          Soy Diseñador UI/UX Con más de 5 años de experiencia en diseño UI/UX, me dedico a crear experiencias de usuario excepcionales.
          También tengo habilidades en front-end, lo que me permite transformar diseños en
          aplicaciones funcionales y optimizadas, mejorando así la satisfacción del usuario final.
        </div>

        <div>
        <button
      type="button"
      style={buttonStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      DOWNLOAD CV
    </button>
        </div>
    </div>
  )
}
