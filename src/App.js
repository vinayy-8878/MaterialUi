import React from "react";
import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";

import {Box,Stack} from '@mui/material'
const App = () => {
  

  return (
   <Box>
    <Stack direction='row' spacing={2} justify-content='space-between'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </Stack>
   </Box>
  );
};

export default App;
