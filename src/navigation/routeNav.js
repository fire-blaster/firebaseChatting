import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './../screens/Register/index';
import Login from './../screens/Login/index';
import Home from './../screens/Home/index';
import Forgot from './../screens/Forgot/index';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../services/auth';
import { setUser } from '../redux/reducers/reducer';


const Stack = createNativeStackNavigator();

const RouteNav = () => {

  const [loginChk, setloginChk] = useState(true);

  const dispatch = useDispatch()
  const { userData, login } = useSelector(state => state.User);

  useEffect(() => {
    getUsers();
  }, [])


  const getUsers = async () => {
    let data = await auth.getAccount()
    if (data !== null) {
      dispatch(setUser(data))
      setloginChk(false)
    } else {
      setloginChk(false)
    }
  }

  if (loginChk) {
    return null;
  }

  return (
    <NavigationContainer scr>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {!login ?
          <Stack.Screen name="Login" component={Login} /> :
          <Stack.Screen name="Home" component={Home} />
        }
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteNav