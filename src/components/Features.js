import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Features = () => {
  return (
    <View style={{height: 60, margin: 10}}>
      <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
        Features
      </Text>
      <View
        style={{
          backgroundColor: '#A7F3D1',
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'column',
          height: 110,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Image
            source={require('../assets/image/chatGPT.png')}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 8,
              color: 'black',
            }}>
            Chat GPT
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            fontWeight: '400',
            color: '#4B5563',
            marginTop: 4,
            color: 'black',
          }}>
          ChatGPT is an AI-powered conversational agent designed to engage in
          natural language conversations and provide insightful responses.
        </Text>
      </View>

      <View
        style={{
            backgroundColor: 'rgba(128, 0, 128, 0.2)',
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'column',
          height: 110,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Image
            source={require('../assets/image/iconAIchat.png')}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 8,
              color: 'black',
            }}>
            Friday
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            fontWeight: '400',
            color: '#4B5563',
            marginTop: 4,
            color: 'black',
          }}>
          Friday AI: Your all-in-one personal assistant, simplifying tasks and
          organizing your life effortlessly.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: 'rgba(0, 255, 255, 0.5)',
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: 'column',
          height: 110,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          <Image
            source={require('../assets/image/smartAI.png')}
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 8,
              color: 'black',
            }}>
          Smart AI
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            fontWeight: '400',
            color: '#4B5563',
            marginTop: 4,
            color: 'black',
          }}>
          Smart AI: Your savvy digital aide, simplifying tasks, offering
          tailored suggestions, and boosting productivity seamlessly.
        </Text>
      </View>
    </View>
  );
};

export default Features;

const styles= StyleSheet.create({});
