import React from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Examples } from '@shoutem/ui';


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Examples/>
      <StatusBar barStyle="default" hidden={false} />

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
