import Navbar from './NavigationBar/navbar.js';
import Patientcard from './Doctor_profile/doctor_profile.js';
import Footer from '../Footer/footer.js';

function doctor_app() {
  return (
    <>
    <div id="colour">
    <Navbar />
    <br/>
    <div id="new">
    <Patientcard />
    </div>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default doctor_app;
