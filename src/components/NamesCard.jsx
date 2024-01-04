import React from 'react'

const NamesCard = ({name,text}) => {
  return (
    <div>
      <div className="names">
                    <h1>{name}</h1>
                    <img src="https://picsum.photos/300/300" alt="random" />
                    <p>{text} </p>
      </div>
    </div>
  )
}

export default NamesCard
