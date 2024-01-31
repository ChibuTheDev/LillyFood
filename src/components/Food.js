import React from 'react'

const Food = (props) => {
  return (
    <div className=''>
        <img src={props.food.img} alt={props.food.desc}/>
        <h3 style={{color: 'var(--brown)'}}>{props.food.title}</h3>
        <p>{props.food.desc}</p>

    </div>
  )
}

export default Food