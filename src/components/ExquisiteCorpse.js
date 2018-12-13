import React from 'react'
import Head from './Head'
import BodyPart, { TORSO_TYPE, BOTTOM_TYPE } from './BodyPart'

const exquisiteCorpseStyle = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',

}
const exquisiteCorpseContentStyle = {
  width: "320px",
  height: "100%",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column'
}

const ExquisiteCorpse = () => {
  return (
    <div style={exquisiteCorpseStyle}>
      <div style={exquisiteCorpseContentStyle}>
        <Head />
        <BodyPart type={TORSO_TYPE} />
        <BodyPart type={BOTTOM_TYPE} />
      </div>
    </div>
  )
}

export default ExquisiteCorpse