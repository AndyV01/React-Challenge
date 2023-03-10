import axios from "axios";
import { useState, useEffect } from "react";
import TableHead from "@mui/material/TableHead";

import MenuBar from "../../components/MenuBar";
import Sidebar from "../../components/Sidebar";
import Alert from "../../components/Alert";

const Dashboard = () => {
  // setear los hooks
  const [search, setSearch] = useState("");
  const [alerts, setAlerts] = useState([]);

  const [name, setName] = useState("");
  const [sorvce, setSorvce] = useState("");
  const [paused, setPaused] = useState("");
  const [metric, setMetric] = useState("");
  const [trigger, setTrigger] = useState("");

  // function to get the data
  const url = "https://rickandmortyapi.com/api/character/";

  const showData = () => {
    axios.get(url).then((res) => {
      setAlerts(res.data.results);
    });
  };

  useEffect(() => {
    showData();
  }, []);

  //  function Searcher
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // filter data
  const results = !search
    ? alerts
    : alerts.filter((val) =>
        val.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  // eliminar Alert
  function alerDelete(id) {
    const temp = alerts.filter((results) => results.id !== id);

    setAlerts(temp);
  }

  
  function handleChange(e) {
    const value = e.target.value;
    setName(value);
  }
  function handleChangeS(e) {
    const value = e.target.value;
    setSorvce(value);
  }
  function handleChangeM(e) {
    const value = e.target.value;
    setMetric(value);
  }
  function handleChangeT(e) {
    const value = e.target.value;
    setTrigger(value);
  }
  function handleChangeP(e) {
    const value = e.target.value;
    setPaused(value);
  }

  //add Alerts
  function handleSubmit(e) {
    e.preventDefault();
    const newAlert = {
      name: name,
      id: sorvce,
      gender: metric,
      created: trigger,
      status: paused,
    };
    //copy Alerts array
    const all = [...alerts];
    //add new alert in array
    all.unshift(newAlert);
    setAlerts(all);

    setName("");
    setSorvce("");
    setMetric("");
    setTrigger("");
    setPaused("");
  }

  //edit Alert
  function handleUpdate(id, value){
    const all = [...alerts]
    const alert = all.find(alert => alert.id === id)
    alert.status = value

    setAlerts(all)
  }

  //props
  const alertas = alerts.filter((val) => val.id);

  return (
    <div style={{ paddingTop: 80, paddingLeft: 250, paddingRight: 100 }}>
      <Sidebar alerts={alertas} />
      <MenuBar />
      <div>
        <h3>User Admin</h3>
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
      <table
        style={{
          width: 1170,
          textAlign: "center",
          border: "solid",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <TableHead sx={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>All Alerts:</th>
          </tr>
        </TableHead>
        <tbody>
          {results.map((result) => (
            <Alert key={result.id} alert={result} onUpdate={handleUpdate} onDelete={alerDelete} />
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} style={{ display:"flex", padding:20 }}>
        <div>
          <input
            placeholder="Name..."
            onChange={handleChange}
            value={name}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Sorvce..."
            onChange={handleChangeS}
            value={sorvce}
            type="number"
          />
        </div>
        <div>
          <input
            placeholder="Metric..."
            onChange={handleChangeM}
            value={metric}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Trigger..."
            onChange={handleChangeT}
            value={trigger}
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Paused..."
            onChange={handleChangeP}
            value={paused}
            type="text"
          />
        </div>
        <button type="submi" onClick={handleSubmit}>
          add Alert
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
