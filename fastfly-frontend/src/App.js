import AddPassenger from "./component/AddPassenger";
import Appbar from "./component/Appbar";
import DisplayFlights from "./component/DisplayFlights";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewPassengers from "./component/ViewPassenger";

function App() {
  return (
    <div className="app">
      <Router>
      <Appbar/>
      <AddPassenger/>
      <DisplayFlights/>
      <Routes>
      <Route exact path="/viewpassenger" element={<ViewPassengers/>} />
      
      </Routes>

      </Router>

    </div>
  );
}

export default App;
