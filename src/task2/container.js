import React from 'react'
import Slider from 'react-rangeslider'
import createReactClass from 'create-react-class'
import {connect} from 'react-redux'


var Task2 = createReactClass({
  

  getInitialState(){
    return {
      value: this.props.step,
      numb: 0
    }
    
  },

  handleChangeStart() { 
    console.log('Change event started' +"" +this.props.step)
  },

  handleChange(value){
    
    this.setState({
      value: value
    })
    
    clearInterval(this.props.second)
    this.props.timer(value)
  },

  handleChangeComplete(){
        
        let timerId = setInterval(()=>{
          this.setState({numb: this.state.numb + this.props.step})
        }, this.props.step)
        
        this.props.second = timerId
       
    console.log('Change event completed' + this.props.step)
  },

  render () {
    const {value} = this.state
    return (
      <div class="task2">
         <div className='slider'>
            <Slider
                min={0}
                max={5000}
                step={100}
                value={value}
                onChangeStart={this.handleChangeStart}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
            />
            <div class="range">
            <h4>0</h4>
            <div className='value'>{value}</div>
            <h4>5000</h4>
            </div>
         </div>
        <div class="counter">
          <h3>Counter:</h3>
          <h3>{this.state.numb}</h3>
        </div>
      </div>
    )
  }
})

const mapDispachToProps = (dispach) => {
  return {
    timer: (value) => dispach({type: 'TIMER', val: value})
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    second: state.second
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Task2)