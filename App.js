import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigation from './src/navigation/index';
import {apiCall} from './src/api/apikey';

const App = () => {
  useEffect(() => {
    console.log('Calling useEffect...'); // Thêm console log để kiểm tra
    apiCall('create an image of a dog playing with cat');
  }, []);

  return <AppNavigation />;
};

export default App;

const styles = StyleSheet.create({});
