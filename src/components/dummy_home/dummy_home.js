import Doctor from '../Doctor/doctor_app';
import Patient from '../Patient/patient_app';
import PatientPrescription from '../Prescription/Patient/prescription-record';
import PatientReport from '../Patient/MedicalReport/report';
import Prescription from '../Prescription/doctor/prescription-record';
import Hospital from '../Hospital/hospital';
import Home from '../Home/home';
import SigninDocPati from '../Signin/doctor_patient/signin';
import SigninHospital from '../Signin/hospital/signin';
import SignupHospital from '../Signin/SignUp/signup';
import AddDoc from '../Hospital/AddDoctors/add';
import AddPat from '../Hospital/AddPatients/add';
import ViewDoc from '../Hospital/ViewDoctors/view';
import ViewPat from '../Hospital/ViewPatients/view';
import AboutUs from '../AboutUs/aboutus';
import NotFound from '../NotFound/notfound';
import AddPrescription from '../Hospital/AddPrescription/add';
import AddReport from '../Hospital/AddMedRec/add';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function dummy_home() {
    return (
      <>
        <Router>
        <Routes>
            
            <Route exact path='/Home' element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Signin/Doctor_or_Patient" element={<SigninDocPati />} />
            <Route exact path="/Signin/Hospital" element={<SigninHospital />} />
            <Route exact path="/Signup/Hospital" element={<SignupHospital />} />

            <Route exact path="/Patient" element={<Patient />} />
            <Route exact path="/Patient/Prescription" element={<PatientPrescription />} />
            <Route exact path="/Patient/Report" element={<PatientReport />} />

            <Route path="/Doctor" element={<Doctor />} />
            <Route exact path="/Doctor/Prescription" element={<Prescription />} />

            <Route exact path='/Hospital' element={<Hospital />} />
            <Route exact path='/Hospital/Add/Doctor' element={<AddDoc />} />
            <Route exact path='/Hospital/Add/Patient' element={<AddPat />} />
            <Route exact path='/Hospital/View/Doctor' element={<ViewDoc />} />
            <Route exact path='/Hospital/View/Patient' element={<ViewPat />} />
            <Route exact path='/Hospital/Add/Prescription' element={<AddPrescription />} />
            <Route exact path='/Hospital/Add/Report' element={<AddReport />} />
            <Route path="/*" element={<NotFound />} />

        </Routes>
        </Router>
      </>
    );
  }
  
export default dummy_home;


