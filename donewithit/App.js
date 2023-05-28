import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
   SafeAreaView, Image} from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Clicked");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native </Text>
      {/* <Image style={styles.logo} source={require('./assets/icon.png')} /> */}
      {/* <TouchableWithoutFeedback onPress={() => console.log("Image Tapped")}>
      <Image style={styles.logo} 
      blurRadius={10}
      source={{
        width: 200,
        height:200,
        uri: "https://picsum.photos/id/1/200/300"}} />
      </TouchableWithoutFeedback>

      <TouchableOpacity onPress={() => console.log("Image Tapped")}>
      <Image style={styles.logo} 
      source={{
        width: 200,
        height:200,
        uri: "https://picsum.photos/id/1/200/300"}} />
      </TouchableOpacity>

      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
      <Image style={styles.logo} 
      source={{
        width: 200,
        height:200,
        uri: "https://picsum.photos/id/1/200/300"}} />
      </TouchableHighlight> */}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  // logo:{
  //   width:00,
  //   height:100
  // }
});
