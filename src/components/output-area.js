import React from 'react';
import ReactDOM from 'react-dom';
var marked = require('marked');

const OutputArea = (props) => {

return(
//    <div>
<p dangerouslySetInnerHTML={{__html:props.outputText}}></p>
//<p>{props.outputText}</p>
//<h3 id="xyz" ></h3>
//</div>
);

}
export default OutputArea;