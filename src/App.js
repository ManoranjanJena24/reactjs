


// import React, { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark Mode is Enabled", "success");
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light Mode is Enabled", "success");
//     }
//   };

//   return (
//     <Router>
//       <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container">
//         <Switch>
//           <Route exact path='/'>
//             <TextForm heading="Enter The Text to Analyse" mode={mode} />
//           </Route>
//           <Route path='/about'>
//             <About />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  };

  return (
    <>
      {/* // <Router> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      {/* //   <Alert alert={alert} /> */}
      <div className="container">
        {/* //     <Switch> */}
        {/* //       <Route exact path='/'> */}
        <TextForm heading="Enter The Text to Analyse" mode={mode} />
        {/* //       </Route> */}
        {/* //       <Route path='/about'> */}
        {/* //         <About /> */}
        {/* //       </Route> */}
        {/* //     </Switch> */}
      </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
