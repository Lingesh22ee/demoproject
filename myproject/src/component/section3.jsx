import React from "react";
import Car from './img/smart-car.png'
import Ship from './img/ship.png'
import Bus from './img/bus.png'
import Driving from './img/driving.png'
// import Rectangle3 from './Helper/images/Rectangle 486.png'
function Section3(){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="content">
                    <div className="custom-bg">
                        <h4 className="text-dark mb-5">MOT CONSECTET</h4>
                        <h3 className="header mb-2">AMET,CONSECTET</h3>
                    </div>
                    <p>
                        Then Create your Pirate Team and enter the Grand Line.
                        Lorem totam maiores! Placeat, mollitia esse odio autem
                        Then Create your Pirate Team and enter the Grand Line.
                        Lorem totam maiores! Placeat, mollitia esse odio autem
                    </p>
                        <button className="btn btn-lg text-white rounded bg-success"> Get started </button> 
                </div>
            </div>
            <div className="col">
        <div className="d-flex flex-column">
            <div className="d-flex mb-4">
                <div className="content card me-4">
                    <img className="h-5 bg-success w-25" src={Car} />
                    <h4 className="">car<span className="h6">rental</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
                <div className="content card">
                    <img className="h-5 bg-success w-25" src={Bus} />
                    <h4 className="">Bus<span className="h6"> CRUISE</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="content card me-4">
                    <img className="h-5 bg-success w-25" src={Ship} />
                    <h4 className="">Bus<span className="h6">Trip</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
                <div className="content card">
                    <img className="h-5 bg-success w-25" src={Driving} />
                    <h4 className="">ROAD<span className="h6"> TRIP</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default Section3