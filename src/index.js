import React from 'react';
import ReactDOM from 'react-dom';
import InputArea from './components/input-area';
import OutputArea from './components/output-area';
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: false,
  tables: false,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  smartypants: false
});


class App extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           htmlText:""
       }
   } 
inputChanged(term){
console.log("Main app: ");
 console.log(marked(term));
this.setState({htmlText: marked(term)});
}

    render() {
return (
    <div>
    <InputArea markedText={(term)=>this.inputChanged(term)}/>
    <OutputArea  outputText={this.state.htmlText} />
    </div>
);
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));