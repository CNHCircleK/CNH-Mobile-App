import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Button, SafeAreaView } from 'react-native';
import { Font, AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoParagraph from './InfoParagraph';
import InfoHeader from './InfoHeader';
import InfoTitle from './InfoTitle';
import Res from '@resources';
import { HeaderBackButton } from 'react-navigation';

/* Standard info page */
export default class TemplateInfoPage extends Component {

  // Res.strings.templateinfo passed into props
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      header: props.header,
      image:  props.image,
      body :props.body,
    };
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView style={styles.height}>
          <HeaderBackButton tintColor='#fefefe' onPress={() => navigation.goBack(null)} />
          <View style={styles.container}>
            {this.state.title !== undefined &&
              <InfoTitle>{this.state.title}{'\n'}</InfoTitle>
            }
            {this.state.image !== undefined &&
              <Image style={{width: 200, height: 200}} resizeMode="contain" source={this.state.image}/>
            }
            {this.state.header !== undefined &&
              <InfoHeader>{'\n'}{this.state.header}{'\n'}</InfoHeader>
            }
            {this.state.body !== undefined &&
              <InfoParagraph>{this.state.body}</InfoParagraph>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#1a1d32'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  height: {
    flex: 1,
    backgroundColor: "#1a1d32",
  },

});
