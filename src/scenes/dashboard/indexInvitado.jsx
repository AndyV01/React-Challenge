import axios from "axios";
import { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";
import MenuBar from "../../components/MenuBar";
import Sidebar from "../../components/Sidebar";
import ComplexGrid from "../../components/Implemented";


const DashboardInvitado = () => {
   
    
    const [alerts, setAlerts] = useState([]);

      // funcion para traer los datos
  const url = "https://rickandmortyapi.com/api/character/";

  const showData = () => {
    axios.get(url).then((res) => {
      setAlerts(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  // filtrar los datos
  const results = alerts


  const alertas = alerts.filter((val)=> val.id )

return (
    <div style={ { paddingTop: 80, paddingLeft:250 } }>
    <Sidebar alerts={alertas} />
    <MenuBar/>
      <h3>Guest user</h3>
      <div style={{display:"flex"}}>
      <table style={{ textAlign:"center", border:"solid",  marginBottom: 20 }}>
        <TableHead sx={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Sorvce</th>
            <th>Metric</th>
            <th>Trigger</th>
            <th>Paused</th>
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
            </tr>
          ))}
        </tbody>
      </table>
      <ComplexGrid/>
      </div>
      </div>
  );
 }
export default DashboardInvitado;