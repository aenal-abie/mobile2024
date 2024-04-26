import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const LocationInfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{uri: 'https://example.com/location_image.jpg'}}
        style={styles.image}
      />
      <Text style={styles.title}>Nama Lokasi Wisata</Text>
      <Text style={styles.description}>Deskripsi singkat tentang lokasi wisata.</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Alamat:</Text>
        <Text style={styles.infoText}>Jl. Contoh No. 123, Kota Contoh</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Jam Operasional:</Text>
        <Text style={styles.infoText}>Senin - Jumat: 08.00 - 17.00</Text>
        <Text style={styles.infoText}>Sabtu - Minggu: 09.00 - 18.00</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Harga Tiket Masuk:</Text>
        <Text style={styles.infoText}>Rp 50.000/orang (Dewasa)</Text>
        <Text style={styles.infoText}>Rp 30.000/orang (Anak-anak)</Text>
      </View>
      {/* Tambahkan informasi lainnya sesuai kebutuhan */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
  },
});

export default LocationInfoScreen;
