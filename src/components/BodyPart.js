import React from 'react'
import PropTypes from 'prop-types'

export const TORSO_TYPE = 'Torso'
export const BOTTOM_TYPE = 'Bottom'

const bodyPartStyle = {
  height: "33%",
  background: "white",
  width: "100%"
}

class BodyPart extends React.Component {
  render() {
    const { type } = this.props
    return <div style={bodyPartStyle} >{type}</div>
  }
}

BodyPart.propTypes = {
  type: PropTypes.oneOf[TORSO_TYPE, BOTTOM_TYPE]
}

export default BodyPart