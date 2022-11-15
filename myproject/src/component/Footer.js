import React from "react";
import {BsFacebook} from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
function Footer(props){
    return(
        <>
        <div className="py-6 header1">
            <div className="container header1">
                <div className="row header1">
                    <div className="col-lg-4 mb-5 mb-lg-0 header1">
                        <div className="fw-bold text-heading mb-2 header1">
                            <img className="header1" src={props.img}/>  <span className=" footer"> AWESOME UI </span>
                        </div>
                            <p className="header1">
                               Lecusandae 
                               laborum corrupti quaerat minus dolorem earum fugit, molestias
                            </p>
                            <p className="header1">
                                Copyright @ 2021 AWESOME.
                            </p>
                            <p className="header1">
                                All rights reserved
                            </p>
                            <ul className="list-inline header1">
                                <li className="list-inline-item header1">
                                    <a className="header header1" href="#" title="facebook"><BsFacebook/></a>
                                </li>
                                <li className="list-inline-item header1">
                                    <a className="header header1 mx-3" href="#" title="twitter"><AiFillTwitterCircle/></a>
                                </li>
                                <li className="list-inline-item header1">
                                    <a className="header header1 mx-2" href="#" title="google"><AiFillGoogleCircle/></a>
                                </li>
                                <li className="list-inline-item header1">
                                    <a className="header header1 mx-3" href="#" title="Instagram"><AiFillInstagram/></a>
                                </li>
                            </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-5 mb-lg-0 header1">
                            <h6 className="mb-3 header header1">
                                Company
                            </h6>
                            <ul className="list-unstyled header1">
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 1</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem 2</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem 3</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem 4</a>
                                </li>
                                <li className="header1">
                                    <a className="text-para header1" href="#">Lorem 5</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-5 mb-lg-0 header1">
                            <h6 className="mb-3  header header1">Support</h6>
                            <ul className="list-unstyled header1">
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 6</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 7</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 8</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 9</a>
                                </li>
                                <li className="mb-3 header1">
                                    <a className="text-para header1" href="#">Lorem Ipsum 10</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4 mx-2 header1">
                           <h6 className="header mb-3 header1">SEND MESSAGE</h6>
                           <form action="#" className="mb-3 header1">
                               <textarea className="mb-2" name="message" placeholder="Your email address" rows="4" cols="30">  
                               </textarea>
                            </form>
                            <button class =" text-white btn btn-lg bg-success">
                                SEND MESSAGE 
                            </button>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Footer ;