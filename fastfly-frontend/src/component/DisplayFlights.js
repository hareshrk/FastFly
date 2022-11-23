import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'airline', headerName: 'NAME', width: 130 },
  { field: 'fromplace', headerName: 'FROM', width: 130 },
  { field: 'toplace', headerName: 'TO', width: 130 },
  { field: 'date', headerName: 'DATE', width: 130 },
  { field: 'seats', headerName: 'SEATS', width: 130 },
  { field: 'cost', headerName: 'COST', width: 130 }
];

export default function DisplayFlights() {
    const [studentsArray, setStudents] = useState([]);

    /**Here, we are fetching student from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/flights")
        .then(res=>res.json())
        .then(studentObj=>setStudents(studentObj))
        .catch(e=>console.log(e))
    },[studentsArray]);


  return (
    <div style={{ height: 320, width: '60%', margin:'auto', marginBottom:'55px', marginTop:'30px' }}>
        <h2> Flights</h2>
      <DataGrid
        rows={studentsArray}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
}
