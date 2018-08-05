import React, { Component } from 'react'

import ExampleComponent from 'wob-smart-seach-input'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataList: [
        {
          name: "Contact1",
          email: "contact1@gmail.com",
        },
        {
          name: "Contact2",
          email: "contact2@gmail.com",
        },
        {
          name: "Contact3",
          email: "contact3@gmail.com",
        },
        {
          name: "Contact4",
          email: "contact4@gmail.com",
        }]
      };
  }

  render () {
    return (
      <div>
        <ExampleComponent id="searchInput" dataList={this.state.dataList}/>
      </div>
    )
  }
}
