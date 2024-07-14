import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

type WalkType = {
  id: string;
  type: string;
  duration: string;
  price: string;
  image: any; // Change type to any or specify ImageSourcePropType if you want to strictly type
};

const initialData: WalkType[] = [
  {
    id: '1',
    type: 'Express Walk',
    duration: '20 min',
    price: 'est. $17.99',
    image: require('D:/React-Native/atlantapet/src/assets/images/dog.png'), // Corrected relative path usage
  },
  {
    id: '2',
    type: 'Atlanta! Walk',
    duration: '30 min',
    price: 'est. $22.99',
    image: require('D:/React-Native/atlantapet/src/assets/images/dog.png'),
  },
];

const additionalData: WalkType[] = [
  {
    id: '3',
    type: 'Deluxe Walk',
    duration: '60 min',
    price: 'est. $32.99',
    image: require('D:/React-Native/atlantapet/src/assets/images/dog.png'),
  },
  {
    id: '4',
    type: 'Deluxe Walk',
    duration: '60 min',
    price: 'est. $32.99',
    image: require('D:/React-Native/atlantapet/src/assets/images/dog.png'),
  },
  {
    id: '5',
    type: 'Deluxe Walk',
    duration: '60 min',
    price: 'est. $32.99',
    image: require('D:/React-Native/atlantapet/src/assets/images/dog.png'),
  },
];

const App: React.FC = () => {
  const renderItem = ({ item }: { item: WalkType }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemType}>{item.type}</Text>
        <Text style={styles.itemDuration}>{item.duration}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('D:/React-Native/atlantapet/src/assets/images/footprintbg.png')}resizeMode="cover" style={styles.header}>
      <Swiper style={styles.swiper} showsPagination loop autoplay={true}>
        <View style={styles.slide}>
        <Text style={styles.headerText}>Book a Atlanta! dog walk</Text>
          <Text>Slide 1</Text>
        </View>
        <View style={styles.slide}>
        <Image source={require('D:/React-Native/atlantapet/src/assets/images/drop.png')} style={styles.cardImage} />

          <Text>Slide 2</Text>
        </View>
        <View style={styles.slide}>
          <Text>Slide 3</Text>
        </View>
      </Swiper>
      </ImageBackground>
      <FlatList
        data={initialData.concat(additionalData)} // Combine initial and additional data
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        style={{ maxHeight: 300 }} // Set a fixed height to show only initial items
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ASAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    // alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    bottom:150,
    alignSelf: 'center', // Cover will stretch the image to cover the entire background
  },
  swiper: {
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  cardImage: {
    width: '14%',
    height: '13%',
    marginBottom: '1%',
    borderRadius: 3,
  }, 
  list: {
    flexGrow: 1,
    paddingVertical: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDuration: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    padding: 16,
    paddingHorizontal:30,
    backgroundColor: '#00c853',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
