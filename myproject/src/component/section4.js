import React from "react";
import Python from'./img/python.png'
import iost from'./img/iost-(iost).png'
import Vector3 from'./img/Vector2.png'
import vector2 from'./img/Vector3.png'
import Rectangle from'./img/Rectangle486.png'
import Rectangle2 from'./img/Rectangle498.png'
function Section4(){
    return(
        <>
        <div className="container">
            <div className="row text-align-center justify-content-center">
                <h4 className="text-warning text-center mt-5 mb-4">MOT CONSECTET</h4>
                <h3 className="header text-center mb-5">AMET,CONSECTET</h3>
                <div className="col-md-3">
                    <div className="position-relative">
                    <div className="card shadow w-20 position-relative card-2">
                        <div className="inner container">
                            <img src={Python} className="h-5 icon-height"/>
                        </div>
                        <div className="card-body">
                        <h4 className="card-title">MOT<span className="h6"> CONSECTET</span></h4>
                            <p className="card-text">
                            Then Create your Pirate Team and enter the Grand Line.
                            Lorem totam maiores! Placeat, mollitia esse odio autem
                            </p>
                        </div>
                    </div>
                    <img src={""} alt="" className="overload"/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow w-20 card-2">
                        <div className="container">
                            <img 
                            src={iost}
                            className="bg- icon-height">
                            </img>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">MOT<span className="h6"> CONSECTET</span></h4>
                            <p className="card-text">
                            Then Create your Pirate Team and enter the Grand Line.
                            Lorem totam maiores! Placeat, mollitia esse odio autem
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="position-relative">
                    <div className="card shadow w-20 position-relative card-2">
                    <div className="container">
                            <img 
                            src={vector2}
                            className="bg-header icon-height">
                            </img>
                        </div>
                        
                        <div className="card-body">
                            <h4 className="card-title">MOT<span className="h7"> CONSECTET</span></h4>
                            <p className="card-text">
                            Then Create your Pirate Team and enter the Grand Line.
                            Lorem totam maiores! Placeat, mollitia esse odio autem
                            </p>
                        </div>
                    </div>
                    <img src={""} alt="" className="overload right"/>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Section4;