import axios from "axios";
import { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MenuBar from "../../components/MenuBar";
import Sidebar from "../../components/Sidebar";




const Dashboard = () => {
  // setear los hooks
  const [search, setSearch] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [servce, setServce] = useState("");
  const [metric, setMetric] = useState("");
  const [trigger, setTrigger] = useState("");
  const [paused, setPaused] = useState("");

  // funcion para traer los datos
  const url = "https://rickandmortyapi.com/api/character/";

  const showData = () => {
    axios.get(url).then((res) => {
      setAlerts(res.data.results);
    });
  };

  useEffect(() => {
    showData();
  }, []);
  
  //  funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
   
  // filtrar los datos
  const results = !search
    ? alerts
    : alerts.filter((val) =>
        val.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  // eliminar Alerta
  function alerDelete(id) {
    const temp = alerts.filter((results) => results.id !== id);
   
    setAlerts(temp);
  }

  //props 
  const alertas = alerts.filter((val)=> val.id )

  // modal de Edicion
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const editar = (name, id, gender, created, status) => {
    setName(name);
    setServce(id);
    setMetric(gender);
    setTrigger(created);
    setPaused(status);
    
  };
  
 
  return (
    <div style={ { paddingTop: 80, paddingLeft:250, paddingRight:100 } }>
       <Sidebar alerts={alertas}  />
       <MenuBar/>
      <div>
        <h3>Usuario Administrador</h3>
        <h1>Alarms</h1>
        <div className="info">
        <button>Name Filter</button>
        <button>Status Filter</button>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Search..."
        />
        </div>
      </div>
      <table style={{width: 1170, textAlign:"center", border:"solid", marginTop: 10, marginBottom: 20}}>
        <TableHead sx={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Sorvce</th>
            <th>Metric</th>
            <th>Trigger</th>
            <th>Paused</th>
            <th>ACTIONS</th>
          </tr>
        </TableHead>
        <tbody>

          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.name} </td>
              <td>{result.id} </td>
              <td>{result.gender} </td>
              <td>{result.created} </td>
              <td>{result.status} </td>
              <td>
                <button
                  onClick={handleOpen} 
                  
                >
                  Edit
                </button>
                <IconButton
                  onClick={(e) => alerDelete(result.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>

                <button>Res</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        id="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Alerta
          </Typography>
          <div>
            <div>
              Name <input type="text" />
            </div>
            <div>
              Sorvce <input type="text" />
            </div>
            <div>
              Metric <input type="text" />
            </div>
            <div>
              Trigger <input type="text" />
            </div>
            Pused <input type="text" />
          </div>

          <Button sx={{ mr: 18, mt: 5 }} variant="contained" component="label">
            Guardar
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button
            sx={{ mt: 5 }}
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
      <Button
            sx={{ mb: 5, ml:120 }}
            variant="outlined"
            color="error"
          >
            Nueva Alarma
          </Button>
    </div>
  );
};

export default Dashboard;
