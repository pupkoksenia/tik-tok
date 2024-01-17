import React from "react";
import { Input, Button } from '@mui/material';

function SearchComponent() {
    return (
    <form className="search">
        <div className="search-input flex">
            <Input type="text" name="search" value="" size="small" placeholder="Search" style={{color: "white"}}/>
            <Button variant="contained" type="submit" size="small" style={{ marginLeft: "3px"}}>Submit</Button>
        </div>
    </form>
    );
  }
  
  export default SearchComponent;
