import React from 'react';
import Team from './Team';
import axios from 'axios';

import { useState } from 'react';
import { useEffect } from 'react';

const Teams = () => {

    let [teams, setTeams] = useState();

    useEffect(() => {
      if (teams == null) {
        console.log("jeste");
        axios.get("api/users").then((response) => {
          console.log(response);
          setTeams(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
          });;
      }
    },[teams]);

    return (
        <div className="all-teams">
        {teams == null ? (
        <>
         </>
      ) : (
        teams.map((team) => <Team team={team} key={team.id}/>)
      )}

   </div>
    );
};

export default Teams;