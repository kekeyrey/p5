import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Gambar */}
      <Image
        source={{ uri: "https://png.pngtree.com/png-clipart/20200722/original/pngtree-flight-tour-travel-logo-template-png-image_5059413.jpg" }}
        style={styles.profileImage}
      />

      {/* Nama Aplikasi */}
      <Text style={styles.appName}>Fligh Tour</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>
        <Ionicons name="airplane" size={20} color="#2E8B57" />{" "}
        "Jelajahi Dunia, Mulai dari Langkah Kecilmu"
      </Text>

      {/* Informasi Aplikasi */}
      <View style={styles.infoContainer}>
        <Text style={styles.description}>
          Fligh adalah aplikasi wisata yang membantu Anda menemukan destinasi terbaik, panduan
          perjalanan, dan tips wisata. Perjalanan lokal, kami siap
          menemani petualangan Anda.
        </Text>
      </View>

      {/* Fitur Utama */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>Fitur Utama:</Text>
        <View style={styles.feature}>
          <Ionicons name="map" size={24} color="#228B22" />
          <Text style={styles.featureText}>Peta Destinasi Wisata</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="compass" size={24} color="#228B22" />
          <Text style={styles.featureText}>Panduan Perjalanan</Text>
        </View>
        <View style={styles.feature}>
          <Ionicons name="bed" size={24} color="#228B22" />
          <Text style={styles.featureText}>Rekomendasi Wisata</Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>© 2024 Fligh Tour. Semua hak dilindungi.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6F7F4',
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#228B22',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#228B22',
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#2E8B57',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 22,
  },
  featuresContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#DFF6F2',
    borderRadius: 12,
    paddingVertical: 16,
    elevation: 4,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#228B22',
    marginBottom: 12,
    textAlign: 'center',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  footer: {
    fontSize: 14,
    color: '#2E8B57',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
