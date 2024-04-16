let incomingCallScreen = `
<div class="card incomingCall m-b-0" style="max-width: 370px; height: 600px; max-height: 600px" id="mydivheader">
<div class="text-center widget-header">
    <div class="avatar avatar-image text-center  m-h-10 m-r-15">
        <div class="circle">
            <span>CS</span>
        </div>
    </div>
</div>
<div class="card-body text-center">
    <h2 class="text-primary m-b-15">CUSTOMER Service - Washington DC</h2>
    <h4>(774) 456-7745</h4>
    <div class="m-b-30 m-t-100 d-flex align-items-center actionbtns justify-content-between ">
        <div class="m-l-auto m-r-auto">
            <img class="m-b-5" src="assets/images/call-end.svg">
            <p>Decline</p>
        </div>
        <div class="m-r-auto m-l-auto" onclick="answerCall()">
            <img class="m-b-5" src="assets/images/call-start.svg">
            <p>Answer</p>
        </div>
    </div>    

</div>
</div>
`

let attendCallScreen = `
<div class="card m-b-0 answeredCall" style="max-width: 370px; height: 600px; max-height: 600px" id="mydivheader">
<div class="widget-header">
    <div class="topbar bg-primary text-white">
        
            <h5 class="modal-title text-white flashit">01:25</h5>
            <button type="button" class="close text-white" onclick="minimizeCallScreen()">
                -
            </button>
        
    </div>
    <div class="caller-info bg-white ">
        <div class="avatar avatar-image m-t-10 m-l-5">
            <div class="circle bg-primary">
                <span class="text-white">CS</span>
            </div>
        </div>
        <div >
            <h3 class="text-primary m-l-20 m-b-0">Customer Service </h3>
            <h5 class=" m-l-20">(774) 456-7745</h5>
        </div>
    </div>
</div>
<hr class="m-auto w-90 text-center">
<div class="card-body">
    <div class="row m-t-30">
        <div class="col-md-12">
            <div class="panel panel-default soft-phone">
            <div class="row m-b-30 justify-content-center">
                <div class="text-center p-5 m-auto" onclick="activeMute()" id="muteBtn">
                    <div class="icon-box">
                    <i class="fas fa-microphone-slash d-block" style="font-size: 26px;"></i>
                    </div>
                    <span class="d-block m-t-5">Mute</span>
                </div>
                <div class="text-center p-5 m-auto" onclick="openDTMF()">
                    <div class="icon-box">
                        <i class="fas fa-th" style="font-size: 26px;"></i>
                    </div>

                    <span class="d-block m-t-5">Dialpad</span>
                </div>
                
            </div>
            <div class="row justify-content-center">
                <div class="text-center p-5 m-auto" onclick="activateHold()" id="holdBtn">
                    <div class="icon-box">
                        <i class="far fa-pause-circle font-size-26"></i>                                                    </div>
                    <span class="d-block m-t-5">Hold</span>
                </div>
                
                <div class="text-center p-5 m-auto" onclick="transferCall()">
                    <div class="icon-box">
                        <i class="far fa-arrow-alt-circle-right" style="font-size: 26px;"></i>
                    </div>
                    
                    <span class="d-block m-t-5">Transfer</span>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div class=" m-t-50 text-center ">
            <img class="m-b-30" src="assets/images/call-end.svg" onclick="endCall()" style="width: 56px; height: auto; cursor: pointer;">
        </div>  
    </div>
</div>
`

let transferCallScreen = `
<div class="card m-b-0 answeredCall" style="max-width: 370px; height: 600px; max-height: 600px" id="mydivheader">
<div class="widget-header">
    <div class="topbar bg-primary text-white">
            <h5 class="modal-title text-white" style="cursor: pointer;" onclick="backToAnsweredCall()">Back</h5>
            <button type="button" class="close text-white" onclick="showwidget()">
                -
            </button>
    </div>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default soft-phone">
            <div class="form-group m-b-30">
                <div class="col-xs-12">
                <input type="tel" class="form-control input-lg" id="txtPhone" placeholder="Enter a name or number">
                </div>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-20">1</button>
                <button class="btn btn-white text-primary btn-number font-size-24">2<span class="d-flex m-auto font-size-14">ABC</span></button>
                <button class="btn btn-white text-primary btn-number font-size-24">3<div class="d-flex m-auto font-size-14">DEF</div></button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">4<div class="d-flex m-auto font-size-14">GHI</div></button>
                <button class="btn btn-white text-primary btn-number font-size-24">5<div class="d-flex m-auto font-size-14">JKL</div></button>
                <button class="btn btn-white text-primary btn-number font-size-24">6<div class="d-flex m-auto font-size-14" style="position: relative; left: -3px;">MNO</div></button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">7<div class="d-flex m-auto font-size-14" style="position: relative; left: -5px;">PQRS</div></button>
                <button class="btn btn-white text-primary btn-number font-size-24">8<div class="d-flex m-auto font-size-14">TUV</div></button>
                <button class="btn btn-white text-primary btn-number font-size-24">9<div class="d-flex m-auto font-size-14" style="position: relative; left: -6px;">WXYZ</div></button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">*</button>
                <button class="btn btn-white text-primary btn-number font-size-24">0<div class="d-flex m-auto font-size-14" style="position: relative; left: 7px;">+</div></button>
                <button class="btn btn-white text-primary btn-number font-size-24">#</button>
            </div>
            <div class="row m-t-20 justify-content-center">
                <div class="m-auto">
                <img src="assets/images/headphones.svg" onclick="assistedTransfer()" style="width: 56px; height: auto; cursor: pointer;">
                <span class="d-block m-t-5">Ask First</span>
            </div>
            <div class="m-auto">
                <img src="assets/images/transfer.svg" onclick="blindTransfer()" style="width: 56px; height: auto; cursor: pointer;">
                <span class="d-block m-t-5">Transfer</span>
            </div>
                
            </div>  
            </div>
            </div>
        </div>
    </div>
</div>
`

let dtmfScreen = `
<div class="card m-b-0 answeredCall" style="max-width: 370px; height: 600px; max-height: 600px" id="mydivheader">
<div class="widget-header">
    <div class="topbar bg-primary text-white">
            <h5 class="modal-title text-white" style="cursor: pointer;" onclick="backToAnsweredCall()">Back</h5>
            <button type="button" class="close text-white" onclick="minimizeCallScreen()">
                -
            </button>
    </div>
</div>
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default soft-phone">
            <div class="form-group m-b-30">
                <div class="col-xs-12">
                <input type="tel" class="form-control input-lg" id="txtPhone" placeholder="Enter the number">
                </div>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">1</button>
                <button class="btn btn-white text-primary btn-number font-size-24">2</button>
                <button class="btn btn-white text-primary btn-number font-size-24">3</button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">4</button>
                <button class="btn btn-white text-primary btn-number font-size-24">5</button>
                <button class="btn btn-white text-primary btn-number font-size-24">6</button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">7</button>
                <button class="btn btn-white text-primary btn-number font-size-24">8</button>
                <button class="btn btn-white text-primary btn-number font-size-24">9</button>
            </div>
            <div class="row justify-content-between m-l-15 m-r-15">
                <button class="btn btn-white text-primary btn-number font-size-24">*</button>
                <button class="btn btn-white text-primary btn-number font-size-24">0</button>
                <button class="btn btn-white text-primary btn-number font-size-24">#</button>
            </div>
            <div class="row m-t-40 justify-content-center">
                <img src="assets/images/call-end.svg" onclick="endCall()" style="width: 56px; height: auto; cursor: pointer;">
            </div>  
            </div>
            </div>
        </div>
    </div>
</div>
</div>
`

let assistedTransferScreen = `
<div class="card m-b-0 answeredCall" style="max-width: 370px; height: 600px; max-height: 600px" id="mydivheader">
<div class="widget-header m-b-10">
    <div class="topbar bg-primary text-white">
        
            <h5 class="modal-title text-white " onclick="backToAnsweredCall()" style="cursor: pointer;">Back</h5>
            <button type="button" class="close text-white" onclick="minimizeCallScreen()">
                -
            </button>
        
    </div>
    <div class="caller-info d-block bg-white p-5 p-t-20">
        <div class="d-flex justify-content-between justify-content-center">
            
                <span class="text-dark m-l-20 mr-auto font-size-18">Agent</span>

            <div class="mr-3 ml-auto d-flex">
                <span class="text-dark m-r-20 font-size-18 float-right">00:15</span>
            <img class="ml-auto float-right" src="assets/images/call-end.svg" onclick="endCall()" style="width: 36px; height: auto; cursor: pointer;"></div>
            
        </div>
    </div>
    <div class="caller-info d-block bg-white p-5">
        <div class="d-flex justify-content-between text-muted">
            
                <span class="text-muted m-l-20 font-size-18">(774) 456-7745</span>

            <div class="ml-auto">
                <span class="text-muted font-size-18 float-right" style="
    margin-right: 70px !important;
">02:55</span>
            </div>
            
        </div>
    </div>
</div>
<hr class="m-auto w-90 text-center">
<div class="card-body">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default soft-phone">
            <div class="row m-t-100 m-b-10 justify-content-center">
                <div class="text-center p-5 m-auto" onclick="activeMute()" id="muteBtn">
                    <div class="icon-box">
                    <i class="fas fa-microphone-slash d-block" style="font-size: 26px;"></i>
                    </div>
                    <span class="d-block m-t-5">Mute</span>
                </div>
                <div class="text-center p-5 m-auto">
                    <div class="icon-box">
                        <i class="fas fa-th" style="font-size: 26px;"></i>
                    </div>

                    <span class="d-block m-t-5">Dialpad</span>
                </div>
                <div class="text-center p-5 m-auto">
                    <div class="icon-box">
                        <i class="far fa-pause-circle font-size-26"></i>                                                    </div>
                    <span class="d-block m-t-5">Hold</span>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div class=" m-t-50 text-center ">
            <img src="assets/images/transfer.svg" onclick="endCall()" style="width: 56px; height: auto; cursor: pointer;">
            <span class="d-block m-t-5">Transfer</span>

        </div>  
    </div>
</div>
`

$('#softphoneWidget').contents().find('body').find('#softphone-container').html(incomingCallScreen)

function showwidget(){
    document.getElementById('softphoneWidget').classList.toggle('d-none')
  }

function answerCall(){
    $('#softphone-container').html(attendCallScreen)
}

function transferCall(){
    $('#softphone-container').html(transferCallScreen)
}

function backToAnsweredCall(){
    $('#softphone-container').html(attendCallScreen)
}

function minimizeCallScreen(){
    alert()
    console.log($('#softphoneWidget').contents().find('body'))
}

function activeMute(){
    $('#muteBtn').toggleClass('text-primary')
}

function activateHold(){
    $('#holdBtn').toggleClass('text-primary')
}

function openDTMF(){
    $('#softphone-container').html(dtmfScreen)
}

function assistedTransfer(){
    $('#softphone-container').html(assistedTransferScreen)
}
