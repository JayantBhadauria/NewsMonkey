import React from 'react'
import loading from'./Rhombus.gif';
export default function Spinner() {
    return (
      <div className='text-center'>
          <img src={loading} alt="Loading.."/>
      </div>
    )
}
