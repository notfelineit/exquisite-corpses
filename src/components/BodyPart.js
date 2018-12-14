import React from 'react'
import PropTypes from 'prop-types'
import Sound from 'react-sound'
import tick from '../sounds/tick.mp3'
import beep from '../sounds/beep.mp3'

export const TORSO_TYPE = 'Torso'
export const BOTTOM_TYPE = 'Bottom'
const IMAGE_OFFSET = 4000

const bodyPartStyle = {
  maxWidth: "100%"
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
    imageIndex: 0,
    playTick: false
  }

  static getDerivedStateFromProps(props, state) {
    const { type } = props
    const images = getImages(type)
    return { images }
  }

  tick = () => {
    this.setState({ playTick: true })
  }

  componentDidMount() {
    const changeImage = () => {
      this.setState((prevState) => {
        const nextImageIndex = (prevState.imageIndex + 1) % prevState.images.length
        return { imageIndex: nextImageIndex }
      })
    }

    (function continuouslyChangeImage() {
      changeImage()
      setTimeout(continuouslyChangeImage, Math.random() * IMAGE_OFFSET);
    })()

    document.addEventListener('click', this.tick);
  }

  render() {
    const { images, imageIndex, playTick } = this.state
    const { type } = this.props
    return (
      <div style={bodyPartStyle}>
        <Sound
          url={beep}
          playStatus={playTick ? Sound.status.PLAYING : Sound.status.STOPPED}
        />
        <img style={{width: "100%"}} src={images[imageIndex]} />
      </div>
    )
  }
}

BodyPart.propTypes = {
  type: PropTypes.oneOf[TORSO_TYPE, BOTTOM_TYPE]
}

export default BodyPart