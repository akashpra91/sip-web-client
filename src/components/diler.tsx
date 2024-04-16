import * as React from 'react';
import { SipUA } from '../services/sip';
import { SipConstants } from '../services/sip';

// export interface IDilerProps {
// }

// export default class Diler extends React.Component<IDilerProps> {
//   sipClient: SipUA;
  
//   constructor(props : IDilerProps) {
//     super(props);
//     console.log("constructor call:");
    
//     this.sipClient = this.registerSipClient();
//   }

//   componentDidMount() {
//     // this.sipClient = this.registerSipClient();
//     console.log("componentDidMount call:");
//   }

//   registerSipClient() {

//     const client = {
//         username: "+14044797173@sip.jbdevaws.intelliverse.com",
//         password: "foobarbazzle",
//         name: "14044797173"
//     }
//     const settings = {
//         pcConfig: {
//             iceServers: [{urls: ['stun:stun.l.google.com:19302']}],
//         },
//         wsUri: "wss://sip.jbdevaws.intelliverse.com:8443",
//     };
//     const sipUA = new SipUA(client, settings);
//     sipUA.on(SipConstants.UA_CONNECTING, args => {
//         console.log(SipConstants.UA_CONNECTING, args);
//     });
//     sipUA.on(SipConstants.UA_REGISTERED, args => {
//         console.log(SipConstants.UA_REGISTERED, args);
//         // this.isButtonDisabled = false;
//     });
//     sipUA.on(SipConstants.UA_UNREGISTERED, args => {
//         console.log(SipConstants.UA_UNREGISTERED, args);
//         // this.isButtonDisabled = true;
//     });
//     sipUA.on(SipConstants.SESSION_ANSWERED, args => {
//         console.log(SipConstants.SESSION_ANSWERED, args);
//         // this.callButtionLabel = HANGUP_LABEL;
//     });
//     sipUA.on(SipConstants.SESSION_ENDED, args => {
//         console.log(SipConstants.SESSION_ENDED, args);
//         // this.callButtionLabel = CALL_LABEL;
//     });
//     sipUA.start();

//     return sipUA;
// }

//   public render() {
//     return (
//       <div>
//         diler page
//       </div>
//     );
//   }
// }



export interface IDilerProps {
}

export interface IDilerState {
}

export default class Diler extends React.Component<IDilerProps, IDilerState> {
  sipClient: SipUA | null =null;
  constructor(props: IDilerProps) {
    super(props);
    console.log("constructor call:");
    this.state = {
    }
    if(!!!this.sipClient){
      console.log("client sip register:");
      this.sipClient = this.registerSipClient();
    }
  }

  componentDidMount() {
    console.log("componentDidMount call:");
  }

  // componentDidUpdate(prevProps: IDilerProps, prevState: IDilerState) {
  //   if (this.props !== prevProps) {
  //     console.log("componentDidUpdate call:");
  //     this.sipClient = this.registerSipClient();
  //   }
  //   console.log("componentDidUpdate outer condition call:");
  // }

  registerSipClient() {

    const client = {
        username: "+14044797173@sip.jbdevaws.intelliverse.com",
        password: "foobarbazzle",
        name: "14044797173"
    }
    const settings = {
        pcConfig: {
            iceServers: [{urls: ['stun:stun.l.google.com:19302']}],
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
    });
    sipUA.start();

    return sipUA;
}

  public render() {
    return (
      <div>
        diler page
      </div>
    );
  }
}

