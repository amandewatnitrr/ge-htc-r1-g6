import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from '../Footer/footer';


function hospital() {
  return (
    <>
        <div style={{'background': 'linear-gradient(#7F7FD5, #91eae4)' }}>
        <Navbar />
        <div id="new">
        Hospital
        </div>
        <Footer />
        </div>
    </>
  )
}

export default hospital;