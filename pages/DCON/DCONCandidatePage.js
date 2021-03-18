import React, { Component } from 'react';
import { StyleSheet, StatusBar,} from 'react-native';
import Res from '@resources';
import { WebView } from 'react-native-webview';

export default class DCONCandidatePage extends Component {
    render() {
        return <WebView source={{ uri: 'https://drive.google.com/file/d/1QFsLvMpomPzC5lMoVWvBRwwG-BAgotZ0/view' }} style={{ marginTop: 20 }} />;
      }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Res.FTCColors.BlueLightsBackground,
    },
    titleText: {
        marginTop: 40,
        fontFamily: "Gilberto",
        fontSize: 95,
        color: Res.FTCColors.MellowApricot,
    },
    pageView: {
        marginBottom: 0,
    },
  });