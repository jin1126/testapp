import React, {Component} from 'react';
import {View} from 'react-native';

import CountryChoose from './src/components/CountryChoose';
import Subscription from './src/components/Subscription';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 0
    };
  }

  onCountryClick = () => {
    this.setState({ page: 1 });
  }

  onBack = () => {
    this.setState({ page: 0});
  }

  render() {
    const { page } = this.state;
    if (page === 0) {
      return (
        <CountryChoose onCountryClick={this.onCountryClick} />
      );
    }
    return <Subscription onBack={this.onBack}/>
  }
}
