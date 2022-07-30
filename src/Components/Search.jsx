import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../Styles/Search.css";

export default function FormPropsTextFields(props) {


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
        <TextField id="outlined-search" label="Search News" type="search" onChange={(e)=>{props.setQuery(e.target.value)}} />
      </div>
      
    </Box>
  );
}
