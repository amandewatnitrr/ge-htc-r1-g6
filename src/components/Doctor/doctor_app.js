import Navbar from './NavigationBar/navbar.js';
import Patientcard from './Doctor_profile/doctor_profile.js';
import Footer from '../Footer/footer.js';

function doctor_app() {
  return (
    <>
    <div style={{'background': 'linear-gradient(#7F7FD5, #91eae4)' }}>
    <Navbar />
    <br/>
    <div style={{'min-height':'50vh'}}>
    <Patientcard />
    </div>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default doctor_app;
