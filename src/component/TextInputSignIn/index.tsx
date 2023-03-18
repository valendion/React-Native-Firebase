import {View, StyleSheet, TextInput} from 'react-native'
import React from 'react'

import {TextInputModel} from '../../models/TextInputModel'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TextInputSignIn = (props: TextInputModel) => {
   return (
      <View style={styles.wrapperTextInput}>
         <View style={styles.iconInputText}>
            <Icon name={props.icon} size={24} color="#aeaeae" />
         </View>
         <TextInput
            placeholderTextColor={'#000'}
            placeholder={props.placeholder}
            style={styles.textInput}
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            onChangeText={text => props.setValue(text)}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   wrapperTextInput: {
      flexDirection: 'row',
      backgroundColor: '#eaeaea',
      paddingHorizontal: 16,
      marginTop: 16,
      borderRadius: 8,
      elevation: 4,
   },

   iconInputText: {
      backgroundColor: '#eaeaea',
      justifyContent: 'center',
      alignItems: 'center',
   },
   textInput: {
      backgroundColor: '#eaeaea',
      marginLeft: 16,
      flex: 1,
      color: 'black',
   },
})

export default TextInputSignIn
