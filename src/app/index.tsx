import { Image, Text, View } from "react-native";
import { mainStyles } from "../styles/style";

export default function Index() {
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.title}>Mobile App</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Image source={require('../images/simpson.jpg')}
          style={{width: 100, height: 200}} />
      </View>
    </View>
  );
}

