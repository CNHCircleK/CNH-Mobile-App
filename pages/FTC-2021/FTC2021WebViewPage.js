import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class FTC2021WebViewPage extends Component {
    render() {
        let link;
        switch (this.props.route.params.link) {
            case 'Techx':
                link = 'https://docs.google.com/forms/d/e/1FAIpQLScKfiWTNHkfTZKrzHbYKGTCVOVx_iPdTWvcqvBzRxO8E4EQ4g/viewform';
                break;
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


            case 'Meeting':
                link = 'https://drive.google.com/file/d/1GfOn0iZAN3u1v0UnZEiLhrHFfHZeqA_j/view?usp=sharing';
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
        

                
                

        }

        return <WebView source={{ uri: link }} style={{ marginTop: 20 }} />;
    }
}