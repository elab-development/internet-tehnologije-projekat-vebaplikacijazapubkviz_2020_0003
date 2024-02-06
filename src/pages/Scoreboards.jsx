import React, { useEffect } from 'react'
import useData from '../useData'
import { Chart } from 'react-google-charts';
import { useState } from 'react';

const Scoreboards = () => {
    const scoreboardsDB=useData("api/scoreboards");
    

    const [chartData, setChartData] = useState([['Team', 'Index']]);
 
    useEffect(() => {
        if (scoreboardsDB) {
            const newChartData = [['Team', 'Index']];
            scoreboardsDB.forEach((scoreboard) => {
                newChartData.push([scoreboard.team, scoreboard.index]);
            });
            setChartData(newChartData);
        }
    }, [scoreboardsDB]);
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
      <Chart
            chartType="BarChart"
            data={chartData}
            options={{
              title: 'Team Index Chart',
              hAxis: { title: 'Team', titleTextStyle: { color: '#333' } },
              vAxis: { title: 'Index', minValue: 0 },
            }}
            width="100%"
            height="400px"
          />
    </div>
  );
}

export default Scoreboards
