import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from './TemplateInfoPage';
import Res from '../resources/res'

export default class DjPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.dj.title}
          image={Res.strings.dj.image}
          header={Res.strings.dj.header}
          body = {Res.strings.dj.body}/>
        );
    }
}
