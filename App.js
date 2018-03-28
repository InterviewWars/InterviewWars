// import React, {Component} from 'react';
// import { render } from 'react-dom';
//
// import './styles.css'
//
//
//
// // export default class App extends
//  class App extends Component{
//    constructor(props) {
//       super(props);
//       this.state = {
//         inputValue: ''
//       };
//     }
//    render() {
//       return (
//          <div>
//             <h1>Hello</h1>
//             <button onClick={()=>console.log('yaclickedme')}>
//               Click me!
//             </button>
//          </div>
//       );
//    }
// }
// render(<App />, document.getElementById('app'));




import React, { Component } from 'react';
import Login from './Login'

class App extends React.Component {
   render() {
      return (
         <div>
            <Login />
         </div>
      );
   }
}
export default App;
