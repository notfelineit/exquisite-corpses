import React from 'react'
import PropTypes from 'prop-types'

export const TORSO_TYPE = 'Torso'
export const BOTTOM_TYPE = 'Bottom'

const bodyPartStyle = {
  width: "100%"
}

function importAll(r) {
  return r.keys().map(r);
}

function getImages(type) {
  if (type === TORSO_TYPE) {
    return importAll(require.context('../images/torsos', false, /\.(png|jpe?g|svg|jpg)$/));
  }
  return importAll(require.context('../images/bottoms', false, /\.(png|jpe?g|svg|jpg)$/));
}

class BodyPart extends React.Component {
  state = {
    imageIndex: 0
  }

  static getDerivedStateFromProps(props, state) {
    const { type } = props
    const images = getImages(type)
    return { images }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        const nextImageIndex = (prevState.imageIndex + 1) % prevState.images.length
        return { imageIndex: nextImageIndex }
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { images, imageIndex } = this.state
    const { type } = this.props
    return <div style={bodyPartStyle} ><img src={images[imageIndex]} /></div>
  }
}

BodyPart.propTypes = {
  type: PropTypes.oneOf[TORSO_TYPE, BOTTOM_TYPE]
}

export default BodyPart