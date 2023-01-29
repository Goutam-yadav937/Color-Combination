import ColorItem from './color-item'
import React, { useEffect } from 'react'

export default function App() {

  const colors = ['#2d3436', '#4834d4', '#be2edc', '#f9ca24', '#6ab04c', '#30336b'];
  
  useEffect(() => {})

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color', color)

  }

  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    
    setTheme(currentColor)

    localStorage.setItem('color', currentColor);
     
     
  }

  return (
    <div>
      <div className="color-switcher">
        <button> </button>
        <h1 className="heading">Select Color</h1>
        
        <div className="color-list">
        {colors.map((color, idx)=> <ColorItem key={idx} setColor={setColor} color={color} />)}
          
        </div>
        
         
      </div>
      <div className='center'>
       <h2 >Color Combination </h2>
      </div>
      
    </div>
  )
}
