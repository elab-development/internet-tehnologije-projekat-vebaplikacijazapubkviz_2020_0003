import React, { useEffect } from 'react'
import useData from '../useData'

const Scoreboards = () => {
    const scoreboardsDB=useData("api/scoreboards");
    
    return (
        <div>
      {scoreboardsDB === null ? (
        <>
        
        </>
      ) : (
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Season</th>
              <th scope="col">Team</th>
              <th scope="col">Index</th>
            </tr>
          </thead>
          <tbody>
            {scoreboardsDB.map((scoreboard, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{scoreboard.season}</td>
                <td>{scoreboard.team}</td>
                <td>{scoreboard.index}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Scoreboards
