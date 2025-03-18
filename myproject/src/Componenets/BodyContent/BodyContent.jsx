import React from 'react'
import './BodyContent.css'
import samsunglogo from '../../assets/samsung.png'

function BodyContent(props) {
  return (
    <div className='aaa'>
        {props.children}
          
    </div>
  )
}


export default BodyContent