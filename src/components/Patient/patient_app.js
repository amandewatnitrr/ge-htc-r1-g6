import Navbar from './NavigationBar/navbar.js';
import Patientcard from './Patient_profile/patient_profile.js';
import Footer from '../Footer/footer.js';

function patient_app() {
  return (
    <>
    <div id="colour">
    <Navbar />
    <br/>
    <div id='new'>
    <Patientcard />
    </div>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default patient_app;