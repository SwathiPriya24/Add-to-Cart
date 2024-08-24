import React from 'react';
import '../style/cardStyle.css'
import Counter from './Counter'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.prodDetails.name}</h1>
        <p>{props.prodDetails.desc}</p>
        <Counter />
        {/* <h1>{props.name}</h1>
        <p>{props.description}</p> */}
        <div className='overlay'>
          {/* <Counter /> */}
        </div>

      </div>
    </div>
  )
}

export default Card
