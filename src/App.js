import React from 'react';
import './App.css';
import oncomed from './images/Onon.png';

import AutomatedPlanning from './component/main/AutomatedPlanning';
import PatientData from './component/main/PatientData';
import PatientModeling from './component/main/PatientModeling';
import PlanDesign from './component/main/PlanDesign';
import PlanOptimization from './component/main/PlanOptimization';
import PlanEvaluation from './component/main/PlanEvaluation';
import Qa from './component/main/Qa';
import TreatMent from './component/main/TreatMent';
import NavBar from './component/NavBar';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      {/* <MainMenu /> */}
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/automatedPlanning" element={<AutomatedPlanning />}></Route>
          <Route path="/patientData" element={<PatientData />}></Route>
          <Route path="/patientModeling" element={<PatientModeling />}></Route>
          <Route path="/planDesign" element={<PlanDesign />}></Route>
          <Route path="/planOptimization" element={<PlanOptimization />}></Route>
          <Route path="/planEvaluation" element={<PlanEvaluation />}></Route>
          <Route path="/qa" element={<Qa />}></Route>
          <Route path="/treatMent" element={<TreatMent />}></Route>         
        </Routes>
      </div>

      <div className="appDiv">
        <img src={oncomed} />
       </div>
    </>

  );
}

export default App;
