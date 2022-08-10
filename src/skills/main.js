// import React, { Component } from 'react'



// const skillsProps= props =>
// {
//     return(
//         <div>
         


// </div>
       
//     );
// };

// export default skillsProps;
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.js';

ReactDOM.render(<>
<Index headerProp="Header from props..." contentProp = "How are you"/>
   </>, document.getElementById('index'));

export default Index;