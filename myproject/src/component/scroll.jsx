import React from "react";
import CTO from './img/r.png'
import Leon from './img/Leon.png'
import philip from './img/philip.png'
//import Arrow from './img'
//import Streight from './img/'
function Scroll(){
    return(
      <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="text-warning mt-5 mb-4">MOT CONSECTET</h4>
            <h3 className="header mb-5">AMET,CONSECTET SIT QUIS</h3>
          </div>
          <div className="align-self-center">
          <img src=""/> <span><img src="" className="bg-header"/></span>
          </div>
        </div>
        <div className="d-flex scroll-wrapper mb-5">
          <div className="card item">
            <div className="d-flex">
              <img src={CTO} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text content-text">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item">
            <div className="d-flex">
              <img src={Leon} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text bg-p">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item">
            <div className="d-flex">
              <img src={philip} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text bg-p">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item">
            <div className="d-flex">
              <img src={CTO} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text bg-p">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item">
            <div className="d-flex">
              <img src={Leon} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text bg-p">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item">
            <div className="d-flex">
              <img src={philip} alt="" />
              <h5>CTO May & Baker<p>Tayo Oshinuma</p></h5>
            </div>
            <p className="card-text bg-p">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
        </div>
        </div>
      </>
    )
}
export default Scroll;