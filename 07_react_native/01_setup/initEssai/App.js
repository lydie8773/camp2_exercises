import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}
        {/*<Text>Changes you make will automatically reload.</Text>*/}
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
        <View style={tabHeader.container}>
          <Text style={tabHeader.textStyle}>Header</Text>
        </View>
        <View style={tabContent.container}>
          {/*<Image source={{*/}
            {/*uri: 'https://facebook.github.io/react/logo-og.png',*/}
            {/*method: 'POST',*/}
            {/*headers: {*/}
              {/*Pragma: 'no-cache',*/}
            {/*},*/}
            {/*body: 'Your Body goes here',*/}
          {/*}} style={{width: 400, height: 400}} />*/}
          <Text style={{textAlign: "center", marginTop: 300}}>Content</Text>
        </View>
        <View style={tabMenu.container}>
          <View style={tabMenu.menu1Style} >
            <Text style={tabMenu.textStyle}>Menu 1</Text>
          </View>
          <View style={tabMenu.menu2Style}>
            <Text style={tabMenu.textStyle}>Menu 2</Text>
          </View>
          <View style={tabMenu.menu3Style}>
            <Text style={tabMenu.textStyle}>Menu 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    justifyContent: 'space-between'
    // alignContent: "flex-end",
    // justifyContent: 'center',
  }
});



const tabHeader = StyleSheet.create({
  container: {
    // width: 100,
    height: 100,
    backgroundColor: "#FFA31F"
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 35
  }
});

const tabContent = StyleSheet.create({
  container: {
    // width: 400,
    height: 650,
    backgroundColor: "white"
  }
});

const tabMenu = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  menu1Style: {
    flex: 1,
    borderWidth: 3,
    // paddingRight: "20%",
    height: 80,
    backgroundColor: '#FFA3BA',
    alignSelf: "auto",
    alignContent: 'stretch',
  },

  menu2Style: {
    // borderTopWidth: 3,
    // borderBottomWidth: 3,
    // paddingLeft: "20%",
    flex: 1,
    borderWidth: 3,
    height: 80,
    backgroundColor: '#7F525D',
    alignSelf: "auto",
    alignContent: 'stretch',
  },

  menu3Style: {
    flex: 1,
    borderWidth: 3,
    // paddingLeft: "33%",
    height: 80,
    backgroundColor: '#FF3164',
    alignSelf: "auto",
    alignContent: 'stretch',
  },

  textStyle: {
    textAlign: "center",
    marginTop: 20
  }
});
