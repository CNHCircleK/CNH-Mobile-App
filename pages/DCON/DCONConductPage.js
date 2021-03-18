import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONConductPage extends Component {
    render() {
        return <WebView source={{ uri: 'https://drive.google.com/file/d/1ZCgwgfSRQabZIBr812LOzYeQjrajtMaq/view' }} style={{ marginTop: 20 }} />;
    }
}