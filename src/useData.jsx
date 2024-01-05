import { useState, useEffect } from 'react';
import axios from 'axios';

function useData(route) {
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    if (dataArray === null) {
      axios.get(route)
        .then((response) => {
          setDataArray(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [dataArray, route]);
  return dataArray;
}

export default useData;