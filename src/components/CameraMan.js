import React, { Component } from 'react'
import Webcam from 'react-webcam'

export default class CameraMan extends Component {
  
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <>
        <Webcam  videoConstraints={videoConstraints}/>
        
      </>
    )
  }
}
