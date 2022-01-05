import React from "react";
import ReactDOM from "react-dom";
import FullCalendarApp from './components/calendar'
import Calendar from "./components/calendar";

function App() {
  return (
    <div className="App">
      <FullCalendarApp/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);