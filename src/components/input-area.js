import React from 'react';

class InputArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputTerm:''
        }
    };
    
    onInputChange(inputTerm){
        console.log(inputTerm);
        this.setState({inputTerm});
        this.props.markedText(inputTerm);
    }

render(){
   
 return  (<textarea value={this.state.inputTerm}
 onChange={(event) => this.onInputChange(event.target.value)}/>
 );
}
}

export default InputArea;