import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

// Komponen TeamCard
const TeamCard = ({ teamMember }) => {
  const [modalVisible, setModalVisible] = useState(false);

  if (!teamMember) {
    return <Text style={styles.errorText}>Data anggota tim tidak tersedia.</Text>;
  }

  const handleImagePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.card}>
      {/* Gambar anggota tim */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: teamMember.image }}
          style={styles.teamImage}
        />
      </TouchableOpacity>

      {/* Informasi anggota tim */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{teamMember.name || 'Nama Tidak Diketahui'}</Text>
        <Text style={styles.cardRole}>{teamMember.role || 'Peran Tidak Diketahui'}</Text>
      </View>

      {/* Modal untuk tampilan gambar besar */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: teamMember.image }}
              style={styles.modalImage}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
    padding: 15,
    alignItems: 'center',
  },
  teamImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
  },
  cardContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardRole: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },

  // Gaya untuk modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
    maxWidth: 350,
  },
  modalImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Pesan error jika data anggota tim tidak ditemukan
  errorText: {
    color: '#f00',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default TeamCard;
