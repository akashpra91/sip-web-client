import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import imgTransfer from "../assets/images/transfer.svg"
import imgHeadPhone from "../assets/images/headphones.svg"
import { SipUA } from '../services/sip';

interface ITransferCallProps {
    sipclient: SipUA
}

const TransferCall: React.FunctionComponent<ITransferCallProps> = (props) => {
    const navigate = useNavigate();

    const showwidget = (e: any) => {
        console.log("showwidget clicked", e.target);

    }

    const backToAnsweredCall = (e: any) => {
        console.log("backToAnsweredCall clicked", e.target);
        navigate("/attendcall");

    }

    const assistedTransfer = (e: any) => {
        console.log("assistedTransfer clicked", e.target);

    }

    const blindTransfer = (e: any) => {
        console.log("blindTransfer clicked", e.target);

    }

    return (<div className="card m-b-0 answeredCall" style={{ maxWidth: "370px", height: "600px", maxHeight: "600px" }} id="mydivheader">
        <div className="widget-header">
            <div className="topbar bg-primary text-white">
                <h5 className="modal-title text-white" style={{ cursor: "pointer" }} onClick={(e) => backToAnsweredCall(e)}>Back</h5>
                <button type="button" className="close text-white" onClick={(e) => showwidget(e)}>
                    -
                </button>
            </div>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default soft-phone">
                        <div className="form-group m-b-30">
                            <div className="col-xs-12">
                                <input type="tel" className="form-control input-lg" id="txtPhone" placeholder="Enter a name or number" />
                            </div>
                        </div>
                        <div className="row justify-content-between m-l-15 m-r-15">
                            <button className="btn btn-white text-primary btn-number font-size-24">1</button>
                            <button className="btn btn-white text-primary btn-number font-size-24">2<span className="d-flex m-auto font-size-14">ABC</span></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">3<div className="d-flex m-auto font-size-14">DEF</div></button>
                        </div>
                        <div className="row justify-content-between m-l-15 m-r-15">
                            <button className="btn btn-white text-primary btn-number font-size-24">4<div className="d-flex m-auto font-size-14">GHI</div></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">5<div className="d-flex m-auto font-size-14">JKL</div></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">6<div className="d-flex m-auto font-size-14" style={{ position: "relative", left: "-3px" }}>MNO</div></button>
                        </div>
                        <div className="row justify-content-between m-l-15 m-r-15">
                            <button className="btn btn-white text-primary btn-number font-size-24">7<div className="d-flex m-auto font-size-14" style={{ position: "relative", left: "-5px" }}>PQRS</div></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">8<div className="d-flex m-auto font-size-14">TUV</div></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">9<div className="d-flex m-auto font-size-14" style={{ position: "relative", left: "-6px" }}>WXYZ</div></button>
                        </div>
                        <div className="row justify-content-between m-l-15 m-r-15">
                            <button className="btn btn-white text-primary btn-number font-size-24">*</button>
                            <button className="btn btn-white text-primary btn-number font-size-24">0<div className="d-flex m-auto font-size-14" style={{ position: "relative", left: "7px" }}>+</div></button>
                            <button className="btn btn-white text-primary btn-number font-size-24">#</button>
                        </div>
                        <div className="row m-t-20 justify-content-center">
                            <div className="m-auto">
                                <img src={imgHeadPhone} onClick={(e) => assistedTransfer(e)} style={{ width: "56px", height: "auto", cursor: "pointer" }} />
                                <span className="d-block m-t-5">Ask First</span>

                            </div>
                            <div className="m-auto">
                                <img src={imgTransfer} onClick={(e) => blindTransfer(e)} style={{ width: "56px", height: "auto", cursor: "pointer" }} />
                                <span className="d-block m-t-5">Transfer</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >);
};

export default TransferCall;
