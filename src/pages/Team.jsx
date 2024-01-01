import React from 'react'

const Team = ({team}) => {
  return (
    <div className="team">
      <img className="team-img" src="https://picsum.photos/200" alt="Tim"/>
      <div className="team-content">
        <h3 className="team-name">{team.name}</h3>
        <p className='team-about'>{team.about}</p>


      </div>
    </div>
  )
}

export default Team
