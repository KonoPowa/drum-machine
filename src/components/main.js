import React from 'react';
import $ from 'jquery';
//import $ from 'jquery';

//VARIABLES**************************
let colorArr = ['FFC2DD','61304B','857C8D','94BFBE','ACF7C1','C3C3E6','D1C8E1','BBA0CA','D5AFD2','E59FC5']
let shadeArr = ['FFEBF4','894369','A49DAA','BFD9D8','ECFDF1','E2E2F3','E9E4F1','DACBE2','EAD7E8','F2CFE2']



let heaterBank = [
  {keyCode: 81, keyTrigger: 'Q', id: 'Heater-1', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {keyCode: 87, keyTrigger: 'W', id: 'Heater-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {keyCode: 69, keyTrigger: 'E', id: 'Heater-3', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  {keyCode: 65, keyTrigger: 'A', id: 'Heater-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {keyCode: 83, keyTrigger: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {keyCode: 68, keyTrigger:'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  {keyCode: 90, keyTrigger: 'Z', id: "Kick-n-Hat", src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  {keyCode: 88, keyTrigger: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  {keyCode: 67, keyTrigger: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
]

let chordBank = [
  {keyCode: 81, keyTrigger: 'Q', id: 'Chord-1', src:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
  {keyCode: 87, keyTrigger: 'W', id: 'Chord-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'},
  {keyCode: 69, keyTrigger: 'E', id: 'Chord-3', src:'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },
  {keyCode: 65, keyTrigger: 'A', id: 'Shaker', src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'},
  {keyCode: 83, keyTrigger: 'S', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
  {keyCode: 68, keyTrigger:'D', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
  {keyCode: 90, keyTrigger: 'Z', id: "Punchy-Kick", src:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  {keyCode: 88, keyTrigger: 'X', id: 'Side-Stick', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  {keyCode: 67, keyTrigger: 'C', id: 'Snare', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
]

let currentBank = heaterBank


//END VARIABLES ^*******************************

class Main extends React.Component  {
//set up


  constructor(props) {
    super(props);
    this.state = {
      display: "",
      color: colorArr[Math.floor(Math.random()*colorArr.length)],
      shade: ''
    }
    this.start = this.start.bind(this)
    this.keyPress = this.keyPress.bind(this)
    this.switch = this.switch.bind(this)
    this.keyUp = this.keyUp.bind(this)
    this.url = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
    //this.audio = new Audio(this.url)
//this.handleChange = this.handleChange.bind(this)
  }


  switch(){
    if (currentBank === heaterBank){
      currentBank = chordBank
      $(".switchColor1").removeClass('switchColor1').addClass('switchColor2')
      this.setState({
        display: "Piano Kit"
      })
    }else{
      currentBank = heaterBank
      $(".switchColor2").removeClass('switchColor2').addClass('switchColor1')
      this.setState({
        display: "Heater Kit"
      })
    }
    console.log("WEEEEEEEEEEE")
  }
//$('#quote-div').hasClass('transition2')



  keyUp(){
    return $(".drum-pad").removeClass('keyd')
  }

//same as on click but for keyboard
  keyPress(event) {
    let myKey = event.key.toUpperCase();
    console.log(myKey.charCodeAt(0))
    for (let i = 0; i < currentBank.length; i++){
      if (myKey.charCodeAt(0) == currentBank[i].keyCode && myKey.length == 1){
        console.log("#"+currentBank[i].id)
        $("#"+currentBank[i].id).addClass('keyd')

        var audio = document.getElementById(currentBank[i].keyTrigger)
        var bingo = "bingo"
        this.setState({
          display: currentBank[i].id
        })
        break;
      }
    }
    if(bingo == 'bingo'){

    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
    var bingo = ""

  }
}

//let colorArr = ['5C0029','61304B','857C8D','94BFBE','ACF7C1']
//let shadeArr = ['A30049','894369','A49DAA','BFD9D8','ECFDF1']


  componentDidMount(){
    window.addEventListener("keydown",this.keyPress)
    window.addEventListener('keyup',this.keyUp);
    //every interval randomizes background and shade
    setInterval(() => {
        this.setState({
            color: colorArr[Math.floor(Math.random()*colorArr.length)]
        })
        document.body.style.transition = "background 4000ms"
        document.body.style.backgroundColor = "#" +this.state.color

        //switch to determine monochromatic color that matches background
        blank()
        console.log(this.state.color)
        console.log(this.state.shade)
      }, 5000);

      function blank(){  switch(this.state.color) {
        case colorArr[0] :
          this.setState({
              shade: shadeArr[0]
          })
        break;
        case colorArr[1] :
          this.setState({
              shade: shadeArr[1]
          })
        break;
        case colorArr[2] :
          this.setState({
              shade: shadeArr[2]
          })
        break;
        case colorArr[3] :
          this.setState({
              shade: shadeArr[3]
          })
        break;
        case colorArr[4] :
          this.setState({
              shade: shadeArr[4]
          })
        break;
        case colorArr[5] :
          this.setState({
              shade: shadeArr[5]
          })
        break;
        case colorArr[6] :
          this.setState({
              shade: shadeArr[6]
          })
        break;
        case colorArr[7] :
          this.setState({
              shade: shadeArr[7]
          })
        break;
        case colorArr[8] :
          this.setState({
              shade: shadeArr[8]
          })
        break;
        case colorArr[9] :
          this.setState({
              shade: shadeArr[9]
          })
        break;
        default:
          console.log('oopsie')
        }
      }; /*END OF SWITCH FUNCTION */

        var blank = blank.bind(this);
        blank();
        document.body.style.transition = "none"
        document.body.style.backgroundColor = "#" +this.state.color
      }/* END OF COMPONENT MOUNT*/

  componentWillUnmount(){
    window.removeEventListener("keydown",this.keyPress)
    window.addEventListener('keyup',this.keyUp);
  }

//changes display text and starts audio
   start(x){
    let audio = document.getElementById(x)

      for (let i = 0; i < currentBank.length; i++){
        if (currentBank[i].keyTrigger == x){
          this.setState({
            display: currentBank[i].id
          })
        }
      }

    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }


}

render(){


  return (
    <div id= 'container'>
      <div id= "title">
      Drum Machine
      </div>
      <div id = 'drum-machine' style = {{backgroundColor: '#'+this.state.shade}}>

          <div id= "drum-bank-wrapper">
            <div id = 'drum-bank'>
              <div class = "drum-pad" onClick={() => this.start(currentBank[0].keyTrigger)} id = {currentBank[0].id} >
              <audio src = {currentBank[0].src} className = "clip"  id={currentBank[0].keyTrigger} ></audio>
                <div class = "text">Q
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[1].keyTrigger)} id = {currentBank[1].id} >
              <audio src = {currentBank[1].src} className = "clip"  id={currentBank[1].keyTrigger} ></audio>
                <div class = "text">W
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[2].keyTrigger)} id = {currentBank[2].id} >
              <audio src = {currentBank[2].src} className = "clip"  id={currentBank[2].keyTrigger} ></audio>
                <div class = "text">E
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[3].keyTrigger)} id = {currentBank[3].id} >
              <audio src = {currentBank[3].src} className = "clip"  id={currentBank[3].keyTrigger} ></audio>
                <div class = "text">A
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[4].keyTrigger)} id = {currentBank[4].id} >
              <audio src = {currentBank[4].src} className = "clip"  id={currentBank[4].keyTrigger} ></audio>
                <div class = "text">S
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[5].keyTrigger)} id = {currentBank[5].id} >
              <audio src = {currentBank[5].src} className = "clip"  id={currentBank[5].keyTrigger} ></audio>
                <div class = "text">D
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[6].keyTrigger)} id = {currentBank[6].id} >
              <audio src = {currentBank[6].src} className = "clip"  id={currentBank[6].keyTrigger} ></audio>
                <div class = "text">Z
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[7].keyTrigger)} id = {currentBank[7].id} >
              <audio src = {currentBank[7].src} className = "clip"  id={currentBank[7].keyTrigger} ></audio>
                <div class = "text">X
                </div>
              </div>
              <div class = "drum-pad" onClick={() => this.start(currentBank[8].keyTrigger)} id = {currentBank[8].id} >
              <audio src = {currentBank[8].src} className = "clip"  id={currentBank[8].keyTrigger} ></audio>
                <div class = "text">C
                </div>
              </div>

            </div>
          </div>
            <div id = "switch-text">
              Mode
            </div>
          <div id = "switch"  onClick = {this.switch}>
            <div className = "switchColor1" style = {{backgroundColor:'#'+this.state.color}}></div>
          </div>

          <div id = 'display'>
            <div id='display-text'> {this.state.display} </div>
          </div>

      </div>
    </div>

  );

}
}
export default Main;
