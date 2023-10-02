import React, { useState } from 'react'
import data from './data'
import "./menu.css"
import { useEffect } from 'react'




const Menu = () => {
    const [show,setShow] = useState(false)
    const [showColor,setShowColor] = useState(false)
    
    const AddBtn = ()=>{
      setShow(!show)
    }
    const colorBtn = ()=>{
      setShowColor(!showColor)
    }
    
    useEffect(()=>{
        
    })
  return (
    <div className='menu'>
      <h1 className='logo'>TudyStudy</h1>
      {
          data.map((onedata)=>{
            const {name_folder,id} = onedata
            return<div key={id}>
              <button id={id} className='btn'>{name_folder}</button>
              
            </div>
          })
        }
        <button onClick={AddBtn} className='add'>Add</button>

        {show&& <div className='AddForm'>
          <input className='jmenoPredmetu' type='text' />
          <button className='btnAdd'>Přidat Přemět</button>
          <button onClick={colorBtn} className='color'></button></div>

          }
        {showColor&&<div className='colox-box'>
          
          </div>}
    </div>
  )
}

export default Menu