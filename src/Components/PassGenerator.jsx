import React, { useState } from 'react'
import "./Style.css"
const PassGenerator = () => {
  const [pswd, setPswd] = useState('')
  const psdGenerate = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz$@#1234567890"
    for (let index = 1; index <= 8; index++) {
      let char = Math.floor(Math.random() * string.length + 1)
      setPswd(pass += string.charAt(char))
      console.log(pass)
    }
  }
  const cpyFunc = () => {
    navigator.clipboard.writeText(pswd)
  }
  return (
    <>



      <div className="pswd__generator">
        <div className="box">
          <h1>Password Generator</h1>
          <div className="input__field">
            <input type="text" readOnly disabled placeholder='Generate Password' value={pswd} />
          </div>
          <div className="btns">
            <button className='generate__btn' onClick={psdGenerate}>Generate Password</button>
            <button className='cpy__btn' onClick={cpyFunc}>Copy Password</button>

          </div>
          <i class="fa-solid fa-face-smile"></i>
          <h1>umar's code  <span>corner's</span></h1>
        </div>

      </div>


    </>
  )
}

export default PassGenerator
