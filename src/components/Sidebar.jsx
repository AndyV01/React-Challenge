
import Box from "@mui/material/Box";
import { useState, useEffect } from 'react';
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

import NotificationsOitlinedIcon from "@mui/icons-material/SettingsOutlined"

export default function Sidebar({alerts} ) {

  const [activeAlerts, setActiveAlerts] = useState()

   console.log(alerts.length)


  useEffect(() =>{
      setActiveAlerts(alerts.length)
  },[alerts])

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          flexDirection: "row-reverse",
          p: 3.5,
        }}
      >
        <NotificationsOitlinedIcon />
        <span>{activeAlerts} </span>
      </AppBar>
     
    </Box>
  );
}
