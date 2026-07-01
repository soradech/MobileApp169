
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: 'blue',
        },
        tabBarActiveTintColor: '#44f',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='Education'
        options={{
          title: 'Education',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='aim' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='Contact'
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='contact-card' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
