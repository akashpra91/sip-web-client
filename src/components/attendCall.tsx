import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgEndCall from '../assets/images/call-end.svg';
import { SipUA } from '../services/sip';

interface IAttendCallProps {
    sipclient: SipUA
}

const AttendCall: React.FunctionComponent<IAttendCallProps> = (props) => {
    const [isMute, setMute] = useState(false);
    const [isHold, setHold] = useState(false);

    const navigate = useNavigate();

    const minimizeCallScreen = (e: any) => {
        console.log("minimizeCallScreen clicked", e.target);
    }

    const activeMute = (e: any) => {
        console.log("activeMute clicked");
        if (!isMute) {
            console.log("audio muted");
            props.sipclient.mute(undefined);
            setMute(!isMute);
        } else {
            console.log("audio unmuted");
            props.sipclient.unmute(undefined)
            setMute(!isMute);
        }

    }

    const openDTMF = (e: any) => {
        console.log("openDTMF clicked", e.target);

    }

    const activateHold = (e: any) => {
        console.log("activateHold clicked");
        if (!isHold) {
            console.log("call put on hold");
            props.sipclient.hold(undefined);
            setHold(!isHold);
        } else {
            console.log("call unhold");
            props.sipclient.unhold(undefined)
            setHold(!isHold);
        }

    }

    const transferCall = (e: any) => {
        console.log("transferCall clicked", e.target);
        // navigate("/transfercall");
        navigate("/dialerpad");

    }

    const terminateCall = (data: any) => {
        console.log("terminateCall", data);
        props.sipclient.terminate(480, "Finished Call", undefined);
    }

    return (
        <div className="card m-b-0 answeredCall" style={{ maxWidth: "370px", height: "600px", maxHeight: "600px" }} id="mydivheader">
            <div className="widget-header">
                <div className="topbar bg-primary text-white">

                    <h5 className="modal-title text-white flashit">01:25</h5>
                    <button type="button" className="close text-white" onClick={(e) => minimizeCallScreen(e)}>
                        -
                    </button>

                </div>
                <div className="caller-info bg-white ">
                    <div className="avatar avatar-image m-t-10 m-l-5">
                        <div className="circle bg-primary">
                            <span className="text-white">CS</span>
                        </div>
                    </div>
                    <div >
                        <h3 className="text-primary m-l-20 m-b-0">Customer Service </h3>
                        <h5 className=" m-l-20">(774) 456-7745</h5>
                    </div>
                </div>
            </div>
            <hr className="m-auto w-90 text-center" />
            <div className="card-body">
                <div className="row m-t-30">
                    <div className="col-md-12">
                        <div className="panel panel-default soft-phone">
                            <div className="row m-b-30 justify-content-center">
                                <div className={`text-center p-5 m-auto${isMute ? ' text-primary' : ''}`} onClick={(e) => activeMute(e)} id="muteBtn">
                                    <div className="icon-box">
                                        <i className="fas fa-microphone-slash d-block" style={{ fontSize: "26px" }}></i>
                                    </div>
                                    <span className="d-block m-t-5">Mute</span>
                                </div>
                                <div className="text-center p-5 m-auto" onClick={(e) => openDTMF(e)}>
                                    <div className="icon-box">
                                        <i className="fas fa-th" style={{ fontSize: "26px" }}></i>
                                    </div>

                                    <span className="d-block m-t-5">Dialpad</span>
                                </div>

                            </div>
                            <div className={isHold ? "row justify-content-center text-primary" : "row justify-content-center"}>
                                <div className="text-center p-5 m-auto" onClick={(e) => activateHold(e)} id="holdBtn">
                                    <div className="icon-box">
                                        <i className="far fa-pause-circle font-size-26"></i>                                                    </div>
                                    <span className="d-block m-t-5">Hold</span>
                                </div>

                                <div className="text-center p-5 m-auto" onClick={(e) => transferCall(e)}>
                                    <div className="icon-box">
                                        <i className="far fa-arrow-alt-circle-right" style={{ fontSize: "26px" }}></i>
                                    </div>

                                    <span className="d-block m-t-5">Transfer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" m-t-50 text-center ">
                    <img className="m-b-30" src={imgEndCall} alt="End Call" onClick={(e) => terminateCall(e)} style={{ width: "56px", height: "auto", cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
};

export default AttendCall;
