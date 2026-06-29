import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
        screenOptions={{
        headerStyle: { backgroundColor: '#07F' },
        headerTintColor: '#fff',
      }}>
      // The header will not be shown
      // Use title: 'Home' in  options to show the header 
      <Stack.Screen name='index' options={{ title: "Home" }} />
      <Stack.Screen name='contact' options={{ title: 'Contact' }} />
      <Stack.Screen name='education' options={{title: 'Education'}} />
    </Stack>
  )
}
