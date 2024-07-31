import React, { useState } from 'react';

interface Iname {
  title: string;
  url: string; // Nueva prop para la URL
}

export default function btnUi(props: Iname) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? '#03249C' : '',
    color: isHovered ? 'white' : '',
    padding: '0.875rem 1.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    transition: 'box-shadow 0.5s ease, color 0.5s ease, background-color 0.5s ease',
    boxShadow: isHovered ? '0 4px 8px rgba(3, 36, 156, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
  };

  const handleClick = () => {
    window.location.href = props.url; // Redirige a la URL especificada
  };

  return (
    <div>
      <button
        className='dark:bg-[#1B1B23] bg-white text-blue dark:text-[#3D9AF4] border-solid border-[1px] border-blue dark:border-[#3D9AF4]'
        type="button"
        style={buttonStyle}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={handleClick} // Evento onClick para redirigir
      >
        {props.title}
      </button>
    </div>
  );
}
