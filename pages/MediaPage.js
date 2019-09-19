import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from './TemplateInfoPage';
import Res from '../resources/res'

export default class MediaPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.media.title}
          image={Res.strings.media.image}
          header={Res.strings.media.header}
          body = {Res.strings.media.body}/>
        );
    }
}
