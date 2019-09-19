import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TemplateInfoPage from '@components/TemplateInfoPage';
import Res from '@resources';

export default class CampfireSkitsPage extends Component {
    render() {
        return (
          <TemplateInfoPage
          title={Res.strings.campfireSkits.title}
          image={Res.strings.campfireSkits.image}
          header={Res.strings.campfireSkits.header}
          body = {Res.strings.campfireSkits.body}/>
        );
    }
}
