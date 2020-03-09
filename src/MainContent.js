import React from 'react';
import logo from './logo.svg';

function MainContent() {
  const fName = "Sritam"
  const lName =  "Jagadev"
  const date = new Date()
  const styles = {
    backgroundColor:"#FF2D00",
    color:"blue"
  }
  return (
    <div>
      <p className='main_text'>{fName} {`${lName}`} it is {date.getHours()%12} o'clock</p>
      <p style={{color:"green"}}>Style text1</p>
      <p style={styles}>Style text2</p>
      <p>JAI HO</p>
      <img src={logo} className='img'></img>
    </div>
  )
}

export default MainContent;
