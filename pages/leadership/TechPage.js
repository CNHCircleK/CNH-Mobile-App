import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class TechPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          image={Res.strings.tech.image}
          navigation={this.props.navigation}/>
        );
    }
}
