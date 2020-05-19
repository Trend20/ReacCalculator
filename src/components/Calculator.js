import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import Button from './Button';
 
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state={
            operations:[],
        }
    }
    render() { 
        return (
            <div>
              <Display data={this.state.operations} />
              <Buttons>
                  <Button onClick={this.handleClick} label="C" value="clear" />
                  <Button onClick={this.handleClick} label="7" value="7" />
                  <Button onClick={this.handleClick} label="4" value="4" />
                  <Button onClick={this.handleClick} label="1" value="1" />
                  <Button onClick={this.handleClick} label="0" value="0" />
              </Buttons>
            </div>
        );
    }
}
 
export default Calculator;