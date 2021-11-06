import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class FTC2021WebViewPage extends Component {
    render() {
        let link;
        switch (this.props.route.params.link) {
            case 'Program':
                link = 'https://drive.google.com/file/d/14au45P4hiWKVDpbz-N7_2M2t3AMy1dkk/view';
                break;
            case 'Conduct':
                link = 'https://drive.google.com/file/d/1Fsmehjecay3JuCSfjOi6VR96wdyHhSHO/view';
                break;
            case 'Campfire':
                link = 'https://drive.google.com/file/d/1eB90qw16JMWFVGNMnofOJNlk_15n9YhA/view';
                break;
            case 'SAA':
                link = 'https://docs.google.com/spreadsheets/d/1QV9uMVVILy57Bh545E6ybYLMgVh5CqrMHO9aav8CaQY/edit?usp=sharing';
                break;
            case 'SAA Handbook':
                link = 'https://drive.google.com/file/d/180cFySOI8dGord3nWIMzAXYeo3y4dxIJ/view';
                break;
            case 'FAQs':
                link = 'https://ftc.cnhcirclek.org/#FAQ';
                break;
            case 'Packing':
                link = 'https://drive.google.com/file/d/106e3TKyU-oNQtMq53HnkrJEG056iDF1Y/view';
                break;
            case 'Side Quests':
                link = 'https://ftc.cnhcirclek.org/#Side-Quests';
                break;
            case 'Personality Quiz':
                link = 'https://quiz.tryinteract.com/#/617f2f52eb51a20018f0b415';
                break;
            case 'Map':
                link = 'https://drive.google.com/file/d/1W2GNDAGp5ET7U9vBS2zt2mL5grpZFO-N/view';
                break;
            case 'Entertainment':
                link = 'https://drive.google.com/file/d/1E8csvwMPuPjF8CHuQowUMEuYp9B0x2hL/view';
                break;
            case 'Website':
                link = 'https://ftc.cnhcirclek.org/';
                break;
            case 'Call to FTC':
                link = 'https://www.youtube.com/watch?v=Ihrqec_Ijsc';
                break;
            case 'Club Sales Contract':
                link = 'https://drive.google.com/file/d/1-Sle8H0_DnQx2e6SdOzhPw5v1zY9oBg4/view';
                break;
            case 'Team Activities':
                link = 'https://drive.google.com/file/d/1bC9lYREb3uXRhPXhYm1G_v9EqatjyBrs/view?fbclid=IwAR3rQyVW7ZhtWI11JFsnQSiQB_Gsx3pOoOhZGx6_w2I63zmBdLivCGQv7nY';
                break;
        }
        return <WebView source={{ uri: link }} style={{ marginTop: 20 }} />;
    }
}