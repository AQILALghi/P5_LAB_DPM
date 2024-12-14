import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const motorcycles = [
  { 
    id: 1, 
    name: 'Custom Cafe Racer', 
    price: 'Rp 45.000.000', 
    image: 'https://images.pexels.com/photos/3269629/pexels-photo-3269629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
  },
  { 
    id: 2, 
    name: 'Custom Bobber', 
    price: 'Rp 50.000.000', 
    image: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/05/18/harley-davidson-softail-fat-boy-20220518033725.jpg' 
  },
  { 
    id: 3, 
    name: 'Custom Chopper', 
    price: 'Rp 60.000.000', 
    image: 'https://asset.kompas.com/crops/12GEMF45jmbtmsBRbdQXhvrkha0=/131x105:1155x788/750x500/data/photo/2020/02/14/5e45a2468457f.jpeg' 
  },
  { 
    id: 4, 
    name: 'Custom Scrambler', 
    price: 'Rp 55.000.000', 
    image: 'https://himalayapost.id/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-14.51.05.jpeg' 
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {motorcycles.map((motor) => (
        <Card key={motor.id} style={styles.card}>
          <Card.Cover source={{ uri: motor.image }} />
          <Card.Title title={motor.name} subtitle={`Harga: ${motor.price}`} />
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Detail', { motor })}
            >
              Lihat Detail
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  card: {
    marginBottom: 16,
  },
});
