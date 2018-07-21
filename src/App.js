import React, { Component } from 'react';
import IndexRouter from './router/IndexRouter'
import NodeHeader from './common/components/NodeHeader'
import NodeFooter from './common/components/NodeFooter'
class App extends Component {
  render() {
    return (
      <div className="App">
         <NodeHeader/>
         <IndexRouter/>
         <NodeFooter/>
      </div>
    );
  }
}

export default App;
