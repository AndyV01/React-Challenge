import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'




const drawerWidth = 200;

export default function MenuBar(){
  const history= useNavigate()
  const logout = () =>{
     history("/")
  }
    return(
        <Drawer
variant="permanent"
sx={{
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}}
>
<Toolbar />
<Box sx={{ overflow: "auto", pt: 3 }}>
  <List>
    
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
             <HomeOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
    
  </List>
  <Divider />
  <List>
    <Typography
      variant="h6"
      color="gray"
      sx={{ m: "15px 20px 5px 20px" }}
    >
      Alarms
    </Typography>
    {["All mail", "Trash", "Spam"].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Button onClick={logout} sx={{ml:8}} size="large" variant="outlined">Salir</Button>
</Box>
</Drawer>
    )
}

