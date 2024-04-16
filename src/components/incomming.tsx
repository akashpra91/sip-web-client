import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import imgStartCall from '../assets/images/call-start.svg';
import imgEndCall from '../assets/images/call-end.svg';
import { SipUA } from '../services/sip';

export interface IIncommingCallProps {
    sipclient:SipUA
}

export default function IncommingCall(props: IIncommingCallProps) {
    // todo: on unmount dom should navigate dialer screen.
    const navigate = useNavigate();

    const answerCall = (data:any) => {
        // this.sipClient
        props.sipclient.answer(undefined);
        navigate("/attendcall");
      }
      const terminateCall = (data:any) => {
        // this.sipClient
        // sipcode, reason
        // this.sipClient.terminate(undefined)
        props.sipclient.terminate(480, "Finished Call",undefined);
      }

    return (
        <div className="card incomingCall m-b-0" style={{ maxWidth: "370px", height: "600px", maxHeight: "600px" }} id="mydivheader">
            <div className="text-center widget-header">
                <div className="avatar avatar-image text-center  m-h-10 m-r-15">
                    <div className="circle">
                        <span>CS</span>
                    </div>
                </div>
            </div>
            <div className="card-body text-center">
                <h2 className="text-primary m-b-15">CUSTOMER Service - Washington DC</h2>
                <h4>(774) 456-7745</h4>
                <div className="m-b-30 m-t-100 d-flex align-items-center actionbtns justify-content-between ">
                    <div className="m-l-auto m-r-auto">
                        <img className="m-b-5" src={imgEndCall} onClick={(e) => terminateCall(e)} alt="Decline"/>
                        <p>Decline</p>
                    </div>
                    <div className="m-r-auto m-l-auto">
                        <img className="m-b-5" src={imgStartCall} onClick={(e) => answerCall(e)} alt="Answer" />
                        <p>Answer</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
