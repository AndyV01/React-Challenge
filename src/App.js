import { Routes, Route } from "react-router-dom"

import Home from "./Home";
import Dashboard from "./scenes/dashboard/index";
import DashboardInvitado from "./scenes/dashboard/indexInvitado"

function App() {
  return (

    <main >
      <Routes>
        <Route path="*" element={<div> Page no fund!!</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<Dashboard />} />
        <Route path="/inv" element={<DashboardInvitado />} />
      </Routes>
    </main>
  );
}

export default App;
