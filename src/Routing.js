import React from 'react';
import AutomatedPlanning from './component/main/AutomatedPlanning';
import PatientData from './component/main/PatientData';
import PatientModeling from './component/main/PatientModeling';
import PlanDesign from './component/main/PlanDesign';
import PlanOptimization from './component/main/PlanOptimization';
import PlanEvaluation from './component/main/PlanEvaluation';
import Qa from './component/main/Qa';
import TreatMent from './component/main/TreatMent';
import { Route, Routes } from 'react-router-dom';


function Routing(props) {
    return (
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
    );
}

export default Routing;