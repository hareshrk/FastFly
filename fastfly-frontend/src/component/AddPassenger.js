import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AddPassenger() {
    const [username, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const submitData =(e) =>{
        e.preventDefault();
        const studentData = {username,age,gender,email};
        /**Here, we are using a post request to send data to the api */
        fetch("http://localhost:8080/user/add",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(studentData)
        })
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
    };
    return (
      <div>
          <h1>Passenger Details</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 0.5, width: '50%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="name" variant="outlined" onChange={(e)=>setName(e.target.value)} />
        <TextField label="age" variant="outlined" onChange={(e)=>setAge(e.target.value)} />
        <TextField label="gender" variant="outlined" onChange={(e)=>setGender(e.target.value)} />
        <TextField label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
        <Button sx={{ bgcolor: "red" }} onClick={submitData} style={{padding:"14px"}} font-family='Gruppo' variant="contained">Add Passenger</Button>
  
      </Box>

      </div>
  );
}
