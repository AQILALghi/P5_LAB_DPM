import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';

export default function DetailScreen({ route }) {
  const { motor } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: motor.image }} style={styles.image} />
      <Text variant="titleLarge" style={styles.title}>{motor.name}</Text>
      <Text variant="bodyLarge">Harga: {motor.price}</Text>
      <Divider style={{ marginVertical: 10 }} />
      <Text variant="bodyMedium" style={styles.description}>
        Motor ini memiliki desain modern dengan mesin yang bertenaga dan cocok untuk penggunaan harian maupun touring.
      </Text>
      <Button mode="contained" style={styles.button} onPress={() => alert('Motor berhasil dibeli!')}>
        Beli Sekarang
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    textAlign: 'justify',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
