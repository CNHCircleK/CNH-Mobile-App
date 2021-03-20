import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class DCONWebViewPage extends Component {
    render() {
        let link;
        switch (this.props.route.params.link) {
            case 'Merch':
                link = 'https://docs.google.com/forms/d/e/1FAIpQLSd4cTg8TF_7QlRizrA2UMd2syQ5L8ti40ICDH7y6vwVAWnReQ/viewform';
                break;
            case 'Shop':
                link = 'https://dcon.cnhcirclek.org/shop.html';
                break;
            case 'Candidate':
                link = 'https://drive.google.com/file/d/1QFsLvMpomPzC5lMoVWvBRwwG-BAgotZ0/view';
                break;
            case 'Shoutouts':
                link = 'https://docs.google.com/forms/d/e/1FAIpQLScM8RkKl4T_hB2QWBejv1EJMXkABdamFCZ_PGH1Mbiw8_WgKw/viewform';
                break;
            case 'Program':
                link = 'https://drive.google.com/file/d/1DFGeJ5ZBzItmiRHSiHy-GV9lAa8JaAsZ/view?fbclid=IwAR2SZ8BU1jybesYhwcs10lNdbqCHKPG1olv8C2u7xO5LstAolUYFKm8VIxY';
                break;
            case 'Conduct':
                link = 'https://drive.google.com/file/d/1ZCgwgfSRQabZIBr812LOzYeQjrajtMaq/view';
                break;
            case 'Website':
                link = 'https://dcon.cnhcirclek.org/';
                break;
            case 'Meeting':
                link = 'https://drive.google.com/file/d/1GfOn0iZAN3u1v0UnZEiLhrHFfHZeqA_j/view?usp=sharing';
                break;
        }

        return <WebView source={{ uri: link }} style={{ marginTop: 20 }} />;
    }
}