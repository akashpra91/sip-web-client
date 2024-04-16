import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SipUA } from './services/sip';
import { SipConstants } from './services/sip';
import "./assets/css/softphone.css";
import "./assets/css/app.min.css";
import AttendCall from './components/attendCall';
import IncommingCall from './components/incomming';
import Diler from './components/diler';
import TransferCall from './components/transfercall';
import { DialerPad } from './components/dialerPad';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  sipClient: SipUA;

  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }

    this.sipClient = this.registerSipClient();
  }

  registerSipClient() {

    const client = {
      username: "+14044797173@sip.jbdevaws.intelliverse.com",
      password: "foobarbazzle",
      name: "14044797173"
    }
    const settings = {
      pcConfig: {
        iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }],
      },
      wsUri: "wss://sip.jbdevaws.intelliverse.com:8443",
    };
    const sipUA = new SipUA(client, settings);
    sipUA.on(SipConstants.UA_CONNECTING, args => {
      console.log(SipConstants.UA_CONNECTING, args);
    });
    sipUA.on(SipConstants.UA_REGISTERED, args => {
      console.log(SipConstants.UA_REGISTERED, args);
      // this.isButtonDisabled = false;
    });
    sipUA.on(SipConstants.UA_UNREGISTERED, args => {
      console.log(SipConstants.UA_UNREGISTERED, args);
      // this.isButtonDisabled = true;
    });
    sipUA.on(SipConstants.SESSION_ANSWERED, args => {
      console.log(SipConstants.SESSION_ANSWERED, args);
      // this.callButtionLabel = HANGUP_LABEL;
    });
    sipUA.on(SipConstants.SESSION_ENDED, args => {
      console.log(SipConstants.SESSION_ENDED, args);
      // this.callButtionLabel = CALL_LABEL;
      window.parent.postMessage({"type":"incoming_call", "status" : true}, 'http://localhost:3005');
    });
    sipUA.on(SipConstants.SESSION_RINGING, args => {
      console.log(SipConstants.SESSION_RINGING, args);
      console.log("sip ringing :::::");
      window.parent.postMessage({"type":"incoming_call", "status" : true}, 'http://localhost:3005');
    });
    sipUA.on(SipConstants.SESSION_FAILED, args => {
      console.log(SipConstants.SESSION_FAILED, args);
      console.log("sip failed :::::");
      window.parent.postMessage({"type":"incoming_call", "status" : true}, 'http://localhost:3005');
    });

    
    sipUA.start();
    return sipUA;
  }

  componentWillUnmount(): void {
    //todo: unregister client
    console.log("will unmount");
    this.sipClient.stop();
  }

  answerCall = (data:any) => {
    // this.sipClient
    this.sipClient.answer(undefined)
  }
  terminateCall = (data:any) => {
    // this.sipClient
    // sipcode, reason
    // this.sipClient.terminate(undefined)
    this.sipClient.terminate(480, "Finished Call",undefined);
  }
  handleAudio = (data:any) =>{
    console.log("handle audio");
    
  }

  public render() {
    return (
      <Router>
        <div>
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/incoming-call">Incoming Call</Link>
            </li>
          </ul>
        </nav> */}
          <Routes>
            {/* <Route path="/" element={<TransferCall />} /> */}
            <Route path="/" element={<IncommingCall sipclient={this.sipClient}/>} />
            <Route path="/incomingcall" element={<IncommingCall sipclient={this.sipClient}/>} />
            <Route path="/transfercall" element={<TransferCall sipclient={this.sipClient}/>} />
            <Route path="/attendcall" element={<AttendCall sipclient={this.sipClient}/>} />
            <Route path="/Dialerpad" element={<DialerPad sipclient={this.sipClient}/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}


