import React, { useState } from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState(true);

  const [dark, setDark] = useState(true);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setDark("Dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Is Enable", "success");
      // document.body.style.caret-color= 'red';
    } else {
      setMode("dark");
      setDark("Light");
      document.body.style.backgroundColor = "#010537d1";
      showAlert("Dark Mode Is Enable", "success");
    }
  };

  return (
      <Router>
        <Navbar
          title="TextUtils"
          dark={dark}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert} />
        <div className="container ">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>

            <Route exact path="/" element={ <TextForm
                showAlert={showAlert}
                heading="Try TextUtils-Word Counter,Character Counter,Remove Extra Spaces"
                mode={mode}
              />}>
             
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
