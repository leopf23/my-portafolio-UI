import React from 'react';
import BtnUi from './btnUi';

interface IportafolioProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  projectUrl: string; // Nueva prop para la URL del proyecto
}

export default function cardPortafolio(props: IportafolioProps) {
  return (
    <div className='block md:flex lg:flex gap-12'>
      {/* Img */}
      <img
        alt=""
        src={props.imageSrc}
        className="h-auto w-[450px] mb-10 md:mb-0"
      />

      {/* Description */}
      <div>
        <h1 className='mb-1 text-3xl font-semibold'>{props.title}</h1>
        <span className='text-blue font-light text-[0.9rem]'>{props.category}</span>
        <p className='mt-2 mb-5 leading-9 text-[0.9rem] text-slate-600 font-light md:w-[600px] w-auto'>
          {props.description}
        </p>
        <BtnUi title={'Ver proyecto'} url={props.projectUrl} /> {/* Usar la URL de la prop */}
      </div>
    </div>
  );
}
