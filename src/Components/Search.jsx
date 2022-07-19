import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../Styles/Search.css";
import {useState} from 'react';

export default function FormPropsTextFields(props) {

  const [query, setQuery] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!query){
      return;
    }
    else{
      props.myQuery(query);
      return;
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="searchdiv">
        <TextField id="outlined-search" label="Search field" type="search" onChange={(e)=>{setQuery(e.target.value);submit(e);}} />
      </div>
      <h1 align="center">{query}</h1>
    </Box>
  );
}
