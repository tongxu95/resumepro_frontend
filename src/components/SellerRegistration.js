import React, { useState, useRef } from "react";

function SellerRegistration(props) {

    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    return (
        <div className="container">
            <div className="row grid">
                <div className="align-left">
                    <h4 className="my-3">Personal Info</h4>
                    <div className="text-muted">
                        <p className="notes">Tell us a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better.</p>
                        <p className="align-right supplemental">
                            <i>
                                <span style={{color: "red"}}>*</span> Mandatory field
                            </i>
                        </p>
                        <hr/>
                    </div>
                    <div className="row gap">
                        <div className="col-3">
                            <p>Full Name<span style={{color: "red"}}>*</span></p>                        
                        </div>
                        <div className="col-9">
                            <span>
                                <input 
                                    className="inputbox"
                                    type="text"
                                    style={{width: "200px"}}
                                    placeholder="First Name"
                                />
                                <input 
                                    className="inputbox"
                                    type="text"
                                    style={{width: "200px"}}
                                    placeholder="Last Name"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="row gap">
                        <div className="col-3">
                            <p>Email<span style={{color: "red"}}>*</span></p>                        
                        </div>
                        <div className="col-9">
                            <input 
                                className="inputbox"
                                type="text"
                                style={{width: "415px"}}
                                placeholder="Email"
                            />
                        </div>
                    </div>                       
                    <div className="row gap">
                        <div className="col-3">
                            <p>Linkedin Profile</p>                        
                        </div>
                        <div className="col-9">
                                <input 
                                    className="inputbox"
                                    type="text"
                                    style={{width: "415px"}}
                                    placeholder="LinkedIn URL"
                                />
                        </div>
                    </div>
                    <div className="row gap">
                        <div className="col-3">
                            <p>Phone Number</p>                        
                        </div>
                        <div className="col-9">
                            <input 
                                className="inputbox"
                                type="text"
                                style={{width: "415px"}}
                                placeholder="Phone Number"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default SellerRegistration;