import React from 'react';
import Team from './Team';

const Teams = ({teams}) => {
    return (
        <div className="all-teams">
        
        {teams.map((team)=>(
         <Team 
         
         key={team.id}  
         team={team}
         
         />
       ))}

   </div>
    );
};

export default Teams;