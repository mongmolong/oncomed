import React from 'react';
import './App.css';
import './styles/SubMenusStyle.css';

import AutomatedPlanning from './component/main/AutomatedPlanning';
import PatientData from './component/main/PatientData';
import PatientModeling from './component/main/PatientModeling';
import PlanDesign from './component/main/PlanDesign';
import PlanOptimization from './component/main/PlanOptimization';
import PlanEvaluation from './component/main/PlanEvaluation';
import Qa from './component/main/Qa';
import TreatMent from './component/main/TreatMent';
import NavBar from './component/NavBar';
import { Route, Routes, Link } from 'react-router-dom';
import PersonId from './component/contents/PersonId';
import BottomContent from './component/main/BottomContent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCaretDown, faDisplay, faMagnifyingGlass, faGear, faDna } from "@fortawesome/free-solid-svg-icons";





function App() {
  return (
    <>
      <div className="topMenu">
        <div className="topMain">
          <NavBar />
        </div>
      </div>
      <div className='subContainer'>
        <PersonId />
        <div className="container">
          <Routes>
            <Route path="/" element={<AutomatedPlanning />}></Route>
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
      </div>
      <BottomContent />
    </>
  );
}

export default App;
