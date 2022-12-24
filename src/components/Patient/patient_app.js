import Navbar from './NavigationBar/navbar.js';
import Patientcard from './Patient_profile/patient_profile.js';
import Footer from '../Footer/footer.js';

function patient_app() {
  return (
    <>
    <Navbar />
    <br/>
    <Patientcard />
    <br/>
    <Footer />
    </>
  );
}

export default patient_app;