import React from 'react';
import Team from './Team';
import MyButton from '../components/MyButton';
import { useState } from 'react';
import { useEffect } from 'react';
import useData from '../useData';

const Teams = () => {

    const teams = useData("api/users");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageRecent, setCurrentPageRecent] = useState(1);

    const [teamsPerPage] = useState(3);  
    const [sortOrder, setSortOrder] = useState('asc');
    const [recentTeams, setRecentTeams] = useState([]);

    useEffect(() => {
      if (teams) {
        const currentDate = new Date();
        const lastTwoDays = new Date(currentDate);
        lastTwoDays.setDate(currentDate.getDate() - 2);
    
        const filteredRecentTeams = teams.filter((team) => {
          const teamCreatedAt = new Date(team.created_at);
          return teamCreatedAt > lastTwoDays;
        });
    
        setRecentTeams(filteredRecentTeams);
      }
    }, [teams]);

    
    const handleSortAndPaginate = (teamsArray, currentPage, teamsPerPage) => {
    const sortedTeams = teamsArray.slice();

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
      setCurrentPageRecent(1);
    };
    
  
    
    const handleNextPageRecent = () => {
      const totalPages = Math.ceil(recentTeams.length / teamsPerPage);
  
      setCurrentPageRecent((prevPage) => {
        return prevPage >= totalPages ? 1 : prevPage + 1;
      });
    };

    const handleNextPage = () => {
      const totalPages = Math.ceil(teams.length / teamsPerPage);
  
      setCurrentPage((prevPage) => {
        return prevPage >= totalPages ? 1 : prevPage + 1;
      });
    };
    
  const goToFirstPageRecent = () => {
    setCurrentPageRecent(1);
  };
  

  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  
    return (
      <div>
        <div>
        <MyButton label={"Sledeća strana"} onClick={() => handleNextPageRecent()} disabled={false} />
        <MyButton label={"Početak"} onClick={() => goToFirstPageRecent()} disabled={false} />
          </div>
          
          <div className='header-title'>Nedavno dodati timovi</div>
        <div className="all-teams">
          {handleSortAndPaginate(recentTeams, currentPageRecent, teamsPerPage).map((team) => (
            <Team team={team} key={team.id} />
          ))}
          
        </div>


        <MyButton label={"Sledeća strana"} onClick={() => handleNextPage()} disabled={false} />
        <MyButton label={"Početak"} onClick={() => goToFirstPage()} disabled={false} />

        <div className='header-title'>Svi timovi</div>
        <div className="all-teams">
        {teams == null ? (
        <>
         </>
      ) : (
        <div className="all-teams">
        {handleSortAndPaginate(teams, currentPage, teamsPerPage).map((team) => <Team team={team} key={team.id}/>)}
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