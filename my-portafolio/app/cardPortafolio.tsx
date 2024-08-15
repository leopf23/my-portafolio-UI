import React from 'react';
import BtnUi from './btnUi';

interface IportafolioProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  projectUrl: string;
  align?: 'left' | 'right'; // Nueva prop para la alineación
}

export default function cardPortafolio(props: IportafolioProps) {
  const alignmentClass = props.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`block md:block lg:flex gap-12 ${alignmentClass}`}>
      <div className='absolute right-[88%] bottom-[-150px] 2xl:bottom-[100px] 2xl:right-[91%]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="1124" viewBox="0 0 320 1124">
          <g id="letra_back" data-name="letra back" transform="translate(72.813 763.5) rotate(-90)">
            <text className='fill-white dark:fill-blueDark stroke-blueText ' id="DESIGNER" transform="translate(-359.5 175.187)" stroke-width="1" font-size="219" font-family="BMWMotorrad-Bold, BMW Motorrad" font-weight="700" opacity="0.40">
              <tspan x="0" y="0">Portafolio</tspan>
            </text>
          </g>
        </svg>
      </div>
      
      {/* Img */}
      <img
        alt=""
        src={props.imageSrc}
        className="h-auto w-full lg:w-[450px] mb-10 md:mb-0"
      />

      {/* Description */}
      <div>
        <h1 className='dark:text-blueLight mb-1 text-3xl font-semibold'>{props.title}</h1>
        <span className='dark:text-white text-blue font-light text-[0.9rem]'>{props.category}</span>
        <p className='mt-2 mb-5 leading-9 text-[0.9rem] text-slate-600 dark:text-white font-light md:w-[600px] w-auto'>
          {props.description}
        </p>
        <BtnUi title={'Ver proyecto'} url={props.projectUrl} />
      </div>
    </div>
  );
}
