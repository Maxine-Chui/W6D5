import React from 'react';
import Clock from './clock';


class Root extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div><Clock /></div>
    );
  }
}

export default Root;
