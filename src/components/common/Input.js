import React from 'react';
import { TextInput, View, Text} from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
  const { InputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secure || false}
        placeholder={placeholder}
        autoCorrect={false}
        style={InputStyle}
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  )
};

const styles = {
  InputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input }