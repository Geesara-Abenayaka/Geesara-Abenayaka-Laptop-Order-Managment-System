import React from 'react'
import {Link} from "react-router-dom";
function ButtonLink(props) {
  return (
    <>
      <Link to={props.url} className='linkbutton'>{props.ButtonLink}</Link>
    </>
  )
}

export default ButtonLink



// import React from 'react'
// import './MenuLink.css'
// import {Link} from "react-router-dom";
// function MenuLink(props) {
//     return (
//             <>
//             {/* <a href={props.url} className='link'>{props.linkname}</a> */}
//             <Link to={props.url} className='link'>{props.linkname}</Link>
//             </>
            
//     )
// }

// export default MenuLink