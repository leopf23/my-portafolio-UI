import React, { useState } from 'react'

export default function btnUi() {
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
  )
}
