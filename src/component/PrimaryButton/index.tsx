import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {PrimaryButtonModel} from '../../models/PrimaryButtonModel'

const PrimaryButton = (props: PrimaryButtonModel) => {
   return (
      <View>
         <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.textButton}>{props.textName}</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#6C63FF',
      marginTop: 32,
      borderRadius: 8,
      elevation: 2,
      paddingVertical: 16,
   },
   textButton: {
      color: '#fff',
      textAlign: 'center',
   },
})

export default PrimaryButton
