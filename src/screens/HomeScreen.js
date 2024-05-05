import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Features from '../components/Features';
import {dummyMessage} from '../constants';
import {apiCall} from '../api/apikey'; // Import hàm apiCall từ openAI.js

const HomeScreen = () => {
  const [message, setMessage] = useState(dummyMessage);
  const [inputText, setInputText] = useState('');

  const clear = () => {
    setMessage([]);
  };

  const fetchResponse = () => {
    if (result.trim().length > 0) {
      let newMessages = [...messages];
      newMessages.push({role: 'user', content: result.trim()});
      setMessage([...newMessages]);

      apiCall(result.trim(), newMessages).then(res => {
        if (res.success) {
          sendMessage([...res.data]);
          setResult('');
        } else {
          Alert.alert('error', res.msg);
        }
      });
    }
  };

  const sendMessage = async () => {
    // Thêm từ khóa async để có thể sử dụng await
    if (inputText.trim() !== '') {
      setMessage([
        ...message,
        {
          role: 'user',
          content: inputText.trim(),
        },
      ]);
      setInputText('');

      // Gọi hàm apiCall từ openAI.js và truyền nội dung câu hỏi
      const response = await apiCall(inputText.trim());
      if (response.success) {
        setMessage([
          ...message,
          {
            role: 'assistant',
            content: response.data[0]?.content, // Giả sử dữ liệu trả về là mảng và chỉ lấy phần tử đầu tiên
          },
        ]);
      } else {
        // Xử lý khi gọi API không thành công
        console.log('Error:', response.msg);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../assets/image/chatbot.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          {message.length > 0 ? (
            <View style={{flex: 1}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                Assistant
              </Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <ScrollView>
                  {message.map((item, index) => (
                    <View key={index} style={{marginBottom: 10}}>
                      {item.role === 'assistant' ? (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                          }}>
                          {item.content.includes('https') ? (
                            <Image
                              source={{uri: item.content}}
                              style={{
                                width: 150,
                                height: 150,
                                borderRadius: 10,
                              }}
                            />
                          ) : (
                            <View
                              style={{
                                backgroundColor: '#e0e0e0',
                                borderRadius: 10,
                                padding: 10,
                              }}>
                              <Text>{item.content}</Text>
                            </View>
                          )}
                        </View>
                      ) : (
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}>
                          <View
                            style={{
                              backgroundColor: '#007AFF',
                              borderRadius: 10,
                              padding: 10,
                            }}>
                            <Text style={{color: 'white'}}>{item.content}</Text>
                          </View>
                        </View>
                      )}
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          ) : (
            <View style={{marginTop: 10}}>
              <Features />
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <TextInput
            style={{
              flex: 1,
              backgroundColor: '#f0f0f0',
              borderRadius: 20,
              padding: 10,
              marginRight: 10,
            }}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            multiline={true}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              backgroundColor: '#007AFF',
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Send</Text>
          </TouchableOpacity>
          {message.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              style={{
                backgroundColor: '#999',
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
