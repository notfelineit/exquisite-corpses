import React from 'react'
import Webcam from 'react-webcam'

class Head extends React.PureComponent {
  render() {
    return <Webcam style={{ height: "33%", width: "100%" }} audio={false} />
  }
}

export default Head