import React, { Component } from "react";

class CallPage extends Component {

  constructor(props) {
    super(props)
  
    this.localVideoref = React.createRef();
    this.remoteVideoref = React.createRef();
  };
  componentDidMount =() =>{

    const pc_config = null;

    this.pc = new RTCPeerConnection(pc_config);

    this.pc.onicecandidate = (e) => {
      if(e.candidate){
        console.log(JSON.stringify(e.candidate))
      }


    }
  }


  render(){
    const constraints = {video: true}

    const success = (stream) =>{
      this.localVideoref.current.srcObject = stream
    }
    const failure = (e) => {
      console.log('getUserMediaError: ', e)
    }

    navigator.mediaDevices.getUserMedia(constraints).then
      ( success).catch(failure);

    return (
    <div>
        <video
          style={{
            width: 240,
            height: 240,
            margin: 5,
            
          }}
          ref={ this.localVideoref }
          autoPlay>
        </video>
        
      </div>
    );
  }
}

export default CallPage;