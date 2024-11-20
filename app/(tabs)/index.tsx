import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, ImageBackground, TextInput, FlatList, Image, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FILTER_OPTIONS = [
  { id: "0", label: "All" },
  { id: "1", label: "Pantai" },
  { id: "2", label: "Pegunungan" },
  { id: "3", label: "Sejarah" },
];

const DATA = [
  {
    id: '1',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Kuta',
    image: 'https://www.vrmtrans.com/uploads/1/1/8/8/118807531/anyconv-com-pantai-kuta-169_orig.webp',
    overview: 'Pantai Kuta di Bali terkenal dengan pasir putihnya yang indah dan tempat sempurna untuk menikmati matahari terbenam.',
  },
  {
    id: '2',
    category_id: '3',
    type: 'Sejarah',
    title: 'Candi Borobudur',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhHSH0gqsJf0rrsosUwSElVUN1PcKvEDwYQ&s',
    overview: 'Situs warisan dunia UNESCO yang merupakan candi Buddha terbesar di dunia, terletak di Magelang, Jawa Tengah.',
  },
  {
    id: '3',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Parangtritis',
    image: 'https://www.nativeindonesia.com/wp-content/uploads/2017/10/pantai-parangtritis.jpg',
    overview: 'Pantai di Yogyakarta yang terkenal dengan ombak besar dan keindahan alam sekitarnya.',
  },
  {
    id: '4',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Gunung Bromo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB85OHvK14NSsId3q0N4DH1Lj8u3koNPhkqA&s',
    overview: 'Gunung aktif di Jawa Timur yang terkenal dengan panorama matahari terbit yang memukau.',
  },
  {
    id: '5',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Gunung Rinjani',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tWPnCWF-4PCbDKXBzUOwvg9G68HK5f_NUA&s',
    overview: 'Gunung berapi di Lombok yang merupakan destinasi favorit para pendaki dengan pemandangan Danau Segara Anak.',
  },
  {
    id: '6',
    category_id: '3',
    type: 'Sejarah',
    title: 'Candi Prambanan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglgV77kF3L1thoijK8DV3VmKzoQL5n-HScA&s',
    overview: 'Kompleks candi Hindu terbesar di Indonesia yang terletak di perbatasan Jawa Tengah dan Yogyakarta.',
  },
  {
    id: '7',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Tanjung Tinggi',
    image: 'https://picture.triptrus.com/image/2014/06/pantai-tanjung-tinggi-1.jpeg',
    overview: 'Pantai yang terkenal dengan batu granit raksasa dan pasir putih di Belitung.',
  },
  {
    id: '8',
    category_id: '3',
    type: 'Sejarah',
    title: 'Keraton Yogyakarta',
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/10/17/WhatsApp-Image-2024-10-17-at-154421-3260115575.jpeg',
    overview: 'Istana resmi Kesultanan Yogyakarta yang menyimpan berbagai koleksi budaya.',
  },
  {
    id: '9',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Gunung Semeru',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAM6O2eTafa9pCyAcJXNUDUjAgOGdDsTRig&s',
    overview: 'Gunung tertinggi di Pulau Jawa yang menjadi favorit para pendaki.',
  },
  {
    id: '10',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Dreamland',
    image: 'https://www.rentalmobilbali.net/wp-content/uploads/2010/12/Daya-Tarik-Pantai-Dreamland-Pecatu.jpg',
    overview: 'Pantai di Bali yang terkenal dengan pemandangan indah dan ombak untuk surfing.',
  },
  {
    id: '11',
    category_id: '3',
    type: 'Sejarah',
    title: 'Benteng Rotterdam',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKC0g2KPJ4b7itA9SlGoVt_AktN0kGlpFS-w&s',
    overview: 'Benteng peninggalan kolonial Belanda di Makassar.',
  },
  {
    id: '12',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Gili Trawangan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAraYT54rAKZPHN1nv2DY14hZEjxfhgwSqQ&s',
    overview: 'Pantai dengan pemandangan bawah laut menakjubkan di Lombok.',
  },
  {
    id: '13',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Gunung Ijen',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGjTiIK0zXmgmg455ax6524TO4TPM3wAXzA&s',
    overview: 'Gunung berapi di Jawa Timur yang terkenal dengan fenomena api biru di kawahnya.',
  },
  {
    id: '14',
    category_id: '3',
    type: 'Sejarah',
    title: 'Taman Mini Indonesia Indah',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwk4E6BNbkUb3UqDnetMVDNk7JPnqXqQ63Xw&s',
    overview: 'Taman budaya di Jakarta yang menampilkan miniatur Indonesia.',
  },
  {
    id: '15',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Pink',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigk1BP3CHZntsakaMN_0ukFMBu5_bkmkTiQ&s',
    overview: 'Pantai unik di Lombok dengan pasir berwarna merah muda.',
  },
  {
    id: '16',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Gunung Merapi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWzTBSWgAYD2KKovjKdVOVY9dm_gzvNpEKA&s',
    overview: 'Gunung berapi paling aktif di Indonesia, terletak di perbatasan Jawa Tengah dan Yogyakarta.',
  },
  {
    id: '17',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Senggigi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GTKG0383YFU2rGo4bz25ZvaeewcZjWMSKg&s',
    overview: 'Pantai di Lombok yang terkenal dengan keindahan panorama sunset-nya.',
  },
  {
    id: '18',
    category_id: '3',
    type: 'Sejarah',
    title: 'Museum Fatahillah',
    image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/231/2024/06/10/Museum-Fatahillah-Oriza-Pratama-Shutterstock-1820779261.png',
    overview: 'Museum sejarah di Jakarta yang terletak di kawasan Kota Tua.',
  },
  {
    id: '19',
    category_id: '2',
    type: 'Pegunungan',
    title: 'Dieng Plateau',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmNLxmSVPKHRdkAF113VRGeT0IvaLJ8XR7g&s',
    overview: 'Dataran tinggi di Jawa Tengah yang dikenal dengan pemandangan alam memukau dan kawah belerangnya.',
  },
  {
    id: '20',
    category_id: '1',
    type: 'Pantai',
    title: 'Pantai Balangan',
    image: 'https://www.water-sport-bali.com/wp-content/uploads/2013/02/Pantai-Balangan-Bali-Feature-Image.jpg',
    overview: 'Pantai dengan suasana tenang di Bali, cocok untuk bersantai dan menikmati pemandangan laut.',
  },
];


export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("0");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => setShowIntro(false));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const filteredRecipes = DATA.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "0" || item.category_id === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  if (showIntro) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <ImageBackground
          source={{ uri: "https://png.pngtree.com/png-clipart/20200722/original/pngtree-flight-tour-travel-logo-template-png-image_5059413.jpg" }}
          style={styles.backgroundImage}
        >
          <View style={styles.introContainer}>
            <Text style={styles.introText}>Welcome to FLIGHT TOUR</Text>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>FLIGHT TOUR</Text>
      </View>

      <View style={styles.filterContainer}>
        {FILTER_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[styles.filterButton, selectedFilter === option.id && styles.selectedFilter]}
            onPress={() => setSelectedFilter(option.id)}
          >
            <Text style={styles.filterText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search All"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setSelectedImage(item.image);
              setSelectedDescription(item.overview);
              setModalVisible(true);
            }}
          >
            <Image source={{ uri: item.image }} style={styles.recipeImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardOverview}>{item.overview}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            <Text style={styles.modalDescription}>{selectedDescription}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  navbar: { backgroundColor: "#A5B68D", padding: 15 },
  navbarText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  backgroundImage: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },
  introContainer: { justifyContent: "center", alignItems: "center" },
  introText: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  filterContainer: { flexDirection: "row", margin: 10, justifyContent: "space-evenly" },
  filterButton: { padding: 10, backgroundColor: "#E0E5B6", borderRadius: 8 },
  selectedFilter: { backgroundColor: "#CBE2B5" },
  filterText: { fontSize: 16, color: "#333" },
  searchInput: { padding: 10, borderWidth: 1, borderRadius: 8, borderColor: "#ddd", margin: 10 },
  card: { marginBottom: 10, backgroundColor: "#fff", borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  recipeImage: { width: "100%", height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8, resizeMode: "cover" },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardOverview: { fontSize: 14, color: "#555", marginTop: 5, lineHeight: 20 },
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" },
  modalContent: { backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
  modalImage: { width: 300, height: 300, resizeMode: "contain" },
  closeButton: { position: "absolute", top: 10, right: 10, backgroundColor: "#000", padding: 10, borderRadius: 20 },
  closeButtonText: { color: "#fff", fontSize: 18 },
  modalDescription: { marginTop: 20, fontSize: 16, color: "#555", textAlign: "center" },
});
