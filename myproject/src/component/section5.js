import React from "react";
import section5 from './img/Section5.jpg.png'
//import Rectangle1 from './img/Rectangle 498.png'
function Section5(){
    return(
        <>
        <div className="py-5 container" role="listbox">
            <div className="item mt-5">
                <div className="row row-sm">
                    <div className="col-md-6">
                        <div className="w-75 h-50 inner-bg">
                            <img 
                            src={section5} 
                            alt="" 
                            className="w-75 h-200  container-fluid img-responsive">
                            </img>
                        </div>
                    </div>
                    <div className="col-md-4 text-align-center mt-5">
                        <div className="team-info">
                            <h4 className="text-success mb-4">MOT CONSECTET</h4>
                            <h3 className="header mb-2">AMET,CONSECTET</h3>
                            <div className="team-div">
                                <p className="mb-4">
                                    Then Create your Pirate Team and enter the Grand Line.
                                    Lorem totam maiores! Placeat, mollitia esse odio autem
                                    recusandae laborum corrupti quaerat minus dolorem earum fugit, molestias
                                </p>
                            </div>
                            <button className=" text-white btn btn-lg bg-success">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Section5