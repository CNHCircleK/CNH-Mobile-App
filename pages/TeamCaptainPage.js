import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from './TemplateInfoPage';
import Res from '../resources/res'

export default class TeamCaptainPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.teamCaptain.title}
          image={Res.strings.teamCaptain.image}
          header={Res.strings.teamCaptain.header}
          body = {Res.strings.teamCaptain.body}/>
        );
    }
}
