import React from "react";
import Batmenter from './img/Batmenter.png.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function Section1(props){
return(
    <>
     <div className="p-5 text-center text-sm-start">
        <div className="container  d-sm-flex align-items-center">
            
          <div className="me-5">
            <h1>
              LOREM IPSUM DOLOR SIT<br/>AMET, CONSECTETUR
            </h1>
            <p className="lead M-5">
              Then Create your Pirate Team and enter the Grand Line .<br/>
              Lorem totam maiores! Placeat, mollitia esse odio autem<br/>
              recusandae laborum corrupti quaerat minus dolorem earum fugit, molestias
            </p>
            <button className=" text-white btn btn-lg  bg-success">GET STARTED </button>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <img
              className="img-fluid w-75 d-md-block  ms-5"
              src={Batmenter}
              alt=""
            ></img>
          </div>
        </div>
      </div>   
    </>
)
}
export default Section1 ;