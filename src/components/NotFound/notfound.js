import Navbar from '../dummy_home/navbar/navbar';
import Footer from '../Footer/footer';
import './css/notfound.css';
import Button from 'react-bootstrap/Button';

function notfound() {
    return (
      <>
        <Navbar />
        <div style={{'min-height':'50vh'}}>
        <center>
        <div title="404">
        <section class="page_404">
            <div class="container">
                <div class="row"> 
                <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
                
                
                </div>
                
                <div class="contant_box_404">
                <h3 class="h2">
                Look like you're lost
                </h3>
                
                <p>the page you are looking for is not available!</p>
                
                <a href="../dummy_home/dummy_home.js"><Button variant="outline-primary">Go to Home</Button></a>
            </div>
                </div>
                </div>
                </div>
            </div>
        </section>
        </div>
        </center>
        </div>
        <Footer />
      </>
      );
    }
export default notfound;