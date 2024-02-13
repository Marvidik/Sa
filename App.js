import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screen/loginscreen';
import HomeScreen from './screen/homescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  
});
