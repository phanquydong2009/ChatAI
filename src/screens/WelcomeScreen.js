import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  const nativegation = useNavigation();

  return (
    <SafeAreaView className="flex-1 flex justify-around align-center bg-white">
      <View className="space-y-1 mt-20">
        <Text className="text-center text-4xl font-bold text-gray-700">
          FRIDAY
        </Text>
        <Text className="text-center tracking-wider text-xl font-semibold text-gray-700">
        Iron Man's virtual assistant in the Marvel cinematic universe
        </Text>
      </View>
      <View className="flex-row justify-center align-center ml-10">
        <Image source= {require('../assets/image/chatbot.png')} className="w-72 h-72 "/>

      </View>
      <TouchableOpacity onPress={()=>nativegation.navigate('Home')}
      className= "bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text className='text-center font-bold text-white text-2xl'> Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
