// components/Taskbar.jsx
import React from 'react';
import '../App.css'

export const Stylebox = ({ content }) => {
  return (
    <div className='taskbar'>
      <div className='inline'>
        <div className='corner-tl'/>
        <div className='corner-tr'/>
      </div>
        
      <div className='background1'>
          {content}
      </div>

      <div className='inline'>
          <div className='corner-bl'/>
          <div className='middle'></div>
          <div className='corner-br'/>
      </div>
    </div>
  );
};