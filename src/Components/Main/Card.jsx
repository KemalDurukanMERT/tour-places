import React from 'react'

//destructure

const Card = ({id, desc, image, title}) => {

    // const {title, desc} = sehir // destructure

    // console.log(props) // gonderilen butun verileri tutar
    // console.log(props.sehir)

  return (
    <div className='cards'>
        <div className="title">
            <h1>{title}</h1>
        </div>
        <img src={image} alt="" />
        <div className='card-over'>
            <p>{desc}</p>
        </div>
    </div>

  )
}

export default Card


// rafce 
