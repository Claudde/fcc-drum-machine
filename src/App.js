import { Component } from 'react';
import './App.scss';
import audio from './sounds';

const column = Object.getOwnPropertyNames(audio);
const drumPadKey = [81, 87, 69, 65, 83, 68, 90, 88, 67];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Drum Machine',
      audioProp: Object.values(audio)[0],
      selected: 'Free Code Camp Kit',
      volume: 100
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDrumPad = this.btnDrumPad.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.createSelectOption = this.createSelectOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  componentWillUnmount(){
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyPress(e) {
    if(drumPadKey.includes(e.keyCode)){
      document.getElementById(String.fromCharCode(e.keyCode)).click();
      document.getElementById(String.fromCharCode(e.keyCode)).parentElement.classList.add('activate');
    }
  }

  handleKeyUp(e){
    if(drumPadKey.includes(e.keyCode)){
      document.getElementById(String.fromCharCode(e.keyCode)).parentElement.classList.remove('activate');
    }
    
  }

  handleClick(audioId, audioName) {
    let vol = this.state.volume / 100;
    this.setState({
      name: audioName
    });
    document.getElementById(audioId).volume = vol;
    document.getElementById(audioId).pause();
    document.getElementById(audioId).currentTime = 0;
    document.getElementById(audioId).play();
  }

  btnDrumPad() {
    let createBtn = '';
    let btnArr = [];
    let numOfBtn = 9;
    for(let i = 0; i < numOfBtn; i++){
      createBtn = <button className='drum-pad' 
                          key={Object.values(this.state.audioProp)[i].key} 
                          id={Object.values(this.state.audioProp)[i].id} 
                          onClick={this.handleClick.bind(this, Object.values(this.state.audioProp)[i].key, Object.values(this.state.audioProp)[i].name)}>  
                    {Object.values(this.state.audioProp)[i].key}
                    <audio src={Object.values(this.state.audioProp)[i].url} 
                           id={Object.values(this.state.audioProp)[i].key}
                           className="clip"
                           controls="">
                    </audio>
                  </button>;
      btnArr.push(createBtn);
    }
    return btnArr;
  }

  createSelectOption(){
    var result;
    var finalResult;
    var optionArr = [];
    for(let i in column){
      result = column[i].replace(/([A-Z])/g, " $1");
      finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      optionArr.push(<a id={i} key={i} className='dropdown-item' href="#" onClick={this.handleChange} value={finalResult} >{finalResult}</a>);

    }
    return optionArr;
  }

  handleChange(event){
    var index = event.target.id;
    this.setState({
      audioProp: Object.values(audio)[index],
      selected: event.target.getAttribute('value')
    });
  }

  volumeChange(event){
    this.setState({
      volume: event.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <div id="drum-machine" className='neon-box'>
          {this.btnDrumPad()}
        </div>
        <div id='side-panel' className='neon-box'>
          <div id='display'>
            <p>{this.state.name}</p>
          </div>
          
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.selected}
            </button>
            <div className="dropdown-menu">
              {this.createSelectOption()}
            </div>
          </div>


          <div className='vol-slider'>
            <label id="lbl-range">Volume</label>
            <input type='range' id='volume-slider' onChange={this.volumeChange} value={this.state.volume} label="lbl-range"/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
