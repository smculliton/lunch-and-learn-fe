import React from 'react'

function Recipe({info}) {
  console.log(info.title)
  return (
    <div>
      <h2>
        <img src={info.image} alt={info.country}/>
        <br />
        <a href={info.url}>
          {info.title}
        </a>
      </h2>
    </div>
  )
}


export default Recipe 