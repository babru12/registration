import React from 'react';
import './App.css';
import Resister from './component/Resister';
import Login from './component/Login';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Privateroute from './component/Privateroute';
import StudentHome from './component/StudentHome';
import MyCourse from './component/MyCourse';
import StudentChangePassword from './component/StudentChangePassword';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Resister' element={<Resister />} />

        <Route path='/student' element={<Privateroute/>} >
             <Route path='studenthome' element={<StudentHome/>}  />
             <Route path='mycourses' element={<MyCourse/>}  />
             <Route path='changepassword' element={<StudentChangePassword/>}/>
        </Route>
      </Routes>

    </Router>

    </React.Fragment>

  )

}

export default App;
