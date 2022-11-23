import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'NAME', width: 130 },
  { field: 'age', headerName: 'AGE', width: 130 },
  { field: 'gender', headerName: 'GENDER', width: 130 },
  { field: 'email', headerName: 'EMAIL', width: 130 },
  { field: 'flightid', headerName: 'FLIGHTID', width: 130 },
];

export default function ViewPassengers() {
    const [studentsArray, setStudents] = useState([]);

    /**Here, we are fetching student from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/user")
        .then(res=>res.json())
        .then(studentObj=>setStudents(studentObj))
        .catch(e=>console.log(e))
    },[studentsArray]);


  return (
    <div style={{ height: 260, width: '45%', margin:'auto', marginBottom:'55px', marginTop:'30px' }}>
        <h2>Booked Passengers</h2>
      <DataGrid
        rows={studentsArray}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}