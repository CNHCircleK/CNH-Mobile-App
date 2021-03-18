import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONCandidatePage extends Component {
    render() {
        return <WebView source={{ uri: 'https://drive.google.com/file/d/1QFsLvMpomPzC5lMoVWvBRwwG-BAgotZ0/view' }} style={{ marginTop: 20 }} />;
    }
}