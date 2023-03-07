import React from "react";
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <>
      <h2>Hm. Looks Like That Page Doesn't Exist.</h2>
      <h2>Nice Try</h2>
      <h2><Link to='/'>Home</Link></h2>
    </>
  )
}

export default NotFound