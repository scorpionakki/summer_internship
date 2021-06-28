import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Registration from './screens/Registration';
import Login from './screens/Login';

export default function App() {
  const [defaultScreen, setDefaultScreen] = useState('Login');
  const changeDefaultScreen = value => {
    setDefaultScreen(value);
  };
  return (
    <View style={styles.container}>
      {
        defaultScreen === 'Registration' ? <Registration defaultScreen={changeDefaultScreen} /> : <Login defaultScreen={changeDefaultScreen}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
});
