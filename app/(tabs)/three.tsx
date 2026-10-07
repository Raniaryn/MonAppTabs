import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Coucou, je suis dans le troisième composant.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});