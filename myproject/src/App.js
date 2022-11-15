import React from "react";
import Header from "./component/Header"
import Section1 from "./component/section1";
import Footer from "./component/Footer";
import Section3 from "./component/section3";
import Section5 from "./component/section5";
import img1 from "./component/img/AU.svg.png";
import imgage from"./component/img/Batmenter.png.jpg";
import Scroll from "./component/scroll";
import Section4 from "./component/section4";

function App(){
  return(
    <div>
      
       <Header
       img={img1}
       />
       <Section1/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Scroll />
      <Footer/>  
    </div>
  );
}
export default App;