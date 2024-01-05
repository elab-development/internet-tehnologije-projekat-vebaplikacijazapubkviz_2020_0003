import React from 'react';
import Team from './Team';
import axios from 'axios';
import MyButton from '../components/MyButton';
import { useState } from 'react';
import { useEffect } from 'react';
import useData from '../useData';

const Teams = () => {

    const teams = useData("api/users");
    const [currentPage, setCurrentPage] = useState(1);
    const [teamsPerPage] = useState(5);  
    const [sortOrder, setSortOrder] = useState('asc');
    
    const handleSortAndPaginate = () => {
      const sortedTeams = [...teams];
      sortedTeams.sort((a, b) => {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });
  
      const indexOfLastTeam = currentPage * teamsPerPage;
      const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
      const paginatedTeams = sortedTeams.slice(indexOfFirstTeam, indexOfLastTeam);
      

      return paginatedTeams;
    };
    const handleSort = (newSortOrder) => {
      setSortOrder(newSortOrder);
      setCurrentPage(1); 
    };
    
  const handleNextPage = () => {
    const totalTeams = teams.length;
     const totalPages = Math.ceil(totalTeams / teamsPerPage);

      setCurrentPage((prevPage) => {
      return prevPage >= totalPages ? 1 : prevPage + 1;
      });
  };

  const goToFirstPage = () => {
    setCurrentPage((prevPage) => 1);
  };
  
    return (
      <div>
        <MyButton label={"Sledećih 5 timova"} onClick={handleNextPage} disabled={false} />
        <MyButton label={"Početak"} onClick={goToFirstPage} disabled={false} />

        <div className="all-teams">
        {teams == null ? (
        <>
         </>
      ) : (
        <div className="all-teams">
        {handleSortAndPaginate().map((team) => <Team team={team} key={team.id}/>)}
        </div>
      )}

        </div>
            <div>
              <MyButton label={"Prikaži u rastućem redosledu"} onClick={() => handleSort("asc")}></MyButton>
              <MyButton label={"Prikaži u opadajućem redosledu"} onClick={() => handleSort("desc")}></MyButton>
            </div>
   </div>)
};

export default Teams;