import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { mainStyles } from "../styles/style";

export default function Index() {
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.title}>Mobile App</Text>
      <Link href='/education' push asChild>
        <Button title="Go to Education" />
      </Link>
      <Link href='/contact' push asChild>
        <Button title="See my Contact" />
      </Link>
    </View>
  );
}

