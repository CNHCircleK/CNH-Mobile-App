import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class SAAPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.saa.title}
          image={Res.strings.saa.image}
          header={Res.strings.saa.header}
          body = {Res.strings.saa.body}/>
        );
    }
}
