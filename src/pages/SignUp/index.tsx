import {Image, StatusBar, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import TextInputSignIn from '../../component/TextInputSignIn'
import PrimaryButton from '../../component/PrimaryButton'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RouteStact} from '../../utils/routes'
import {useNavigation} from '@react-navigation/native'

type signUpScreenProp = NativeStackNavigationProp<RouteStact, 'SignUp'>
const SignUp = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigation = useNavigation<signUpScreenProp>()
   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         <View style={styles.containerSignIn}>
            <Image
               source={require('../../assets/images/ic_sign_up.png')}
               style={styles.image}
            />
            <Text style={styles.textTitle}>Sign Up</Text>
         </View>

         <TextInputSignIn
            placeholder={'Input your email'}
            value={email}
            icon={'envelope'}
            secureTextEntry={false}
            setValue={setEmail}
         />

         <TextInputSignIn
            placeholder={'Input your password'}
            value={password}
            icon={'lock'}
            secureTextEntry={true}
            setValue={setPassword}
         />

         <PrimaryButton
            textName={'Sign Up'}
            onPress={() => navigation.navigate('SignIn')}
         />
      </View>
   )
}

export default SignUp

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
      justifyContent: 'center',
   },
   containerSignIn: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   image: {
      width: 250,
      height: 250,
   },
   wrapperTextInput: {
      flexDirection: 'row',
      backgroundColor: '#eaeaea',
      paddingHorizontal: 16,
      marginTop: 16,
      borderRadius: 8,
      elevation: 4,
   },
   textTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 24,
      marginTop: 24,
   },
   textSignUp: {
      fontSize: 16,
      color: 'black',
      marginTop: 16,
      textAlign: 'center',
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
   },
})
