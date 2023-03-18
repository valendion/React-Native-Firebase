import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {RouteStact} from './utils/routes'

const Stack = createNativeStackNavigator<RouteStact>()

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
export default App
