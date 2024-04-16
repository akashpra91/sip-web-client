import * as React from 'react';
import { useState, useRef } from 'react';
import { SipUA } from '../services/sip';
import { useNavigate } from 'react-router-dom';
import imgTransfer from "../assets/images/transfer.svg"
import imgHeadPhone from "../assets/images/headphones.svg"

export interface IDialerPadProps {
  sipclient: SipUA
}

export function DialerPad(props: IDialerPadProps) {

  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  // Function to handle key press events
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("key press", event.key);

    const keyPressed = event.key;
    if (/^\d$/.test(keyPressed)) {
      // If the key pressed is a digit, append it to the phone number
      setPhoneNumber(phoneNumber + keyPressed);
    } else if (keyPressed === 'Enter') {
      // If 'Enter' key is pressed, focus on the text box
      inputRef.current?.focus();
    }
  };

  // Function to handle click events on the call button
  const handleCallButtonClick = () => {
    // Perform actions for calling the number, e.g., making an API call
    console.log('Calling:', phoneNumber);
  };

  const backToAnsweredCall = () => {
    navigate("/transfercall")
  }

  const assistedTransfer = (e: any) => {
    // todo: start this work
    console.log("assistedTransfer clicked", e.target);
}

const blindTransfer = (e: any) => {
    console.log("blindTransfer clicked", e.target);

}

  // Ref for the input element to focus on
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="card m-b-0 answeredCall" style={{ maxWidth: "370px", height: "600px", maxHeight: "600px" }} id="mydivheader">
      <div className="widget-header">
        <div className="topbar bg-primary text-white">
          <h5 className="modal-title text-white" style={{ cursor: "pointer" }} onClick={backToAnsweredCall}>Back</h5>
          <button type="button" className="close text-white" >
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
                  <input
                    ref={inputRef}
                    type="text"
                    className="form-control input-lg"
                    id="txtPhone"
                    placeholder="Enter a name or number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  // onKeyDown={handleKeyPress}
                  />
                </div>
              </div>
              <div>
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
          <button className= "btn btn-white text-primary btn-number font-size-24" key={digit} onClick={() => setPhoneNumber(phoneNumber + digit)}>
            {digit}
          </button>
        ))} */}

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].reduce((chunks: any, digit, index) => {
                  if (index % 3 === 0) chunks.push([]);
                  chunks[chunks.length - 1].push(digit);
                  return chunks;
                }, []).map((chunk: any, index: any) => (
                  <div key={index} className='row justify-content-between m-l-15 m-r-15'>
                    {chunk.map((digit: any) => (
                      <button className="btn btn-white text-primary btn-number font-size-24" key={digit} onClick={() => setPhoneNumber(phoneNumber + digit)}>{digit}</button>
                    ))}
                  </div>
                ))}

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
      </div>
    </div>
  );
}
