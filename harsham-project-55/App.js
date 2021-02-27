import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';



class DJbutton4 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
  {uri:
          'http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'pink',
          marginTop: 10,
          marginLeft: 75,
          borderWidth: 3,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 50,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Mollard Duck
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton1 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3' },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'rgb(25,200,330)',
          marginLeft: 75,
          marginTop:30,
          borderWidth: 3,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 50,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Birds Chirping
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton2 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:'http://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3',
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'yellow',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 50,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Birds Chirping in Rain
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJbutton3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Parots Talking-SoundBible.com-587469366.mp3' },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'rgb(255,150,95)',
          marginLeft: 75,
          marginTop: 17,
          borderWidth: 3,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 50,
          borderRadius: 50,
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontSize: 10,
          }}>
          Parrots Talking
        </Text>
      </TouchableOpacity>
    );
  }
}

class DJStopbutton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 75,
          marginTop: 50,
          borderWidth: 3,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 70,
          borderRadius: 50,
        }}
        onPress={() => { 

          Audio.setIsEnabledAsync(false);
        
         }}>

        <Text style={{
        fontWeight: 'bold',
        fontSize: 25
      }}>
          Stop Sound
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Text style={{
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'times'
      }}>
          Here are some sounds of the birds...Let's listen to them
        </Text>
        <DJbutton1 />
        <DJbutton2 />
        <DJbutton3 />
        <DJbutton4 />
        <DJStopbutton />
        <Text style={{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'times'
      }}>
          Note- Sounds may take few seconds to work.
        </Text>
      </View>
    );
  }
}