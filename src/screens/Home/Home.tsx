import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, useColorScheme } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation(); 
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleCardPress = (service: string) => {
    console.log(`Clicked on ${service}`);
  };

  const handlewalk = () => {
    navigation.navigate('Walk' as never);
  };
  const handleStart = () => {
    navigation.navigate('Start' as never);
  };

  const styles = createStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={handlewalk}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/dog.png')} style={styles.cardImage1} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Atlanta! Walk</Text>
              <Text style={styles.cardText2}>Get Their steps in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handlewalk()}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/bording.png')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Boarding</Text>
              <Text style={styles.cardText2}>In Caregiver's home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Sitting')}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/sitting.png')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Sitting</Text>
              <Text style={styles.cardText2}>In your home</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowLeft}>
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Drop-In')}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/drop.png')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Drop-In</Text>
              <Text style={styles.cardText2}>Brief home visit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Vet Chat')}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/chat.png')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Vet Chat</Text>
              <Text style={styles.cardText2}>Chat live 24/7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => handleStart()}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/chat.png')} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Transport</Text>
              <Text style={styles.cardText2}>Active 24/7</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.emptyCardSpace} />
        </View>

        <View style={styles.swiperContainer}>
          <Swiper
            style={styles.swiper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            loop={true}
            showsPagination={false}
          >
            <View style={styles.slide}>
              <ImageBackground source={require('D:/React-Native/atlantapet/src/assets/images/cardbg.png')} style={styles.slideImage} resizeMode="cover">
                <View style={styles.slideContent}>
                  <Text style={styles.slideText}>$15 Overnight savings</Text>
                  <Text style={styles.slideSubText}>Save on 4th of July Overnight{'\n'}care with code HOTDOG15</Text>
                  <TouchableOpacity style={styles.slideButton} onPress={() => console.log("Banner button pressed")}>
                    <Text style={styles.slideButtonText}>Tap here {'>'}</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={require('D:/React-Native/atlantapet/src/assets/images/cardbg.png')} style={styles.slideImage} resizeMode="cover">
                <View style={styles.slideContent}>
                  <Text style={styles.slideText}>$20 Pet Grooming discount</Text>
                  <Text style={styles.slideSubText}>Get a grooming session at a{'\n'}discount with code GROOM20</Text>
                  <TouchableOpacity style={styles.slideButton} onPress={() => console.log("Learn more button pressed")}>
                    <Text style={styles.slideButtonText}>Learn more {'>'}</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground source={require('D:/React-Native/atlantapet/src/assets/images/cardbg.png')} style={styles.slideImage} resizeMode="cover">
                <View style={styles.slideContent}>
                  <Text style={styles.slideText}>Free Vet Consultation</Text>
                  <Text style={styles.slideSubText}>Get a free vet {'\n'}consultation with code VETFREE</Text>
                  <TouchableOpacity style={styles.slideButton} onPress={() => console.log("Book now button pressed")}>
                    <Text style={styles.slideButtonText}>Book now {'>'}</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </Swiper>
        </View>

        <View style={styles.upcomingCard}>
          <Text style={styles.upcomingText}>No upcoming services </Text>
          <View style={styles.hr} ></View>
          <View style={styles.upcomingRow}>
            <Image source={require('D:/React-Native/atlantapet/src/assets/images/dog.png')} style={styles.upcomingImage} />
            <View>
              <Text style={styles.upcomingServiceText}>Atlanta! Walk</Text>
              <Text style={styles.bookNowText}>Book now</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const createStyles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? '#000' : 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: hp('1%'),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('4%'),
    backgroundColor: '#00cc99',
  },
  headerTitle: {
    color: 'white',
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },
  earnButton: {
    backgroundColor: '#12ccb7',
    borderRadius: wp('5%'),
    paddingHorizontal: wp('4%'),
  },
  earnButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnButtonText: {
    color: 'white',
    fontSize: wp('4%'),
  },
  earnButtonIcon: {
    marginLeft: wp('1%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: hp('2%'),
  },
  rowLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: hp('2%'),
  },
  card: {
    width: wp('28%'),
    alignItems: 'center',
    padding: wp('2%'),
    backgroundColor: isDarkMode ? '#333' : 'white',
    borderRadius: wp('2%'),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
    marginHorizontal: wp('1%'),
  },
  emptyCardSpace: {
    width: wp('28%'),
    alignItems: 'center',
    padding: wp('2%'),
    backgroundColor: 'transparent',
    borderRadius: wp('2%'),
    marginHorizontal: wp('1%'),
  },
  cardImage: {
    width: wp('14%'),
    height: wp('13%'),
    marginBottom: hp('1%'),
    borderRadius: wp('3%'),
  },
  cardImage1: {
    width: wp('14%'),
    height: wp('16%'),
    marginBottom: hp('1%'),
    borderRadius: wp('3%'),
  },
  cardTextContainer: {
    alignItems: 'center',
  },
  cardText: {
    fontSize: wp('3.5%'),
    textAlign: 'center',
    color: isDarkMode ? '#fff' : '#000',
    fontWeight: '600',
  },
  cardText2: {
    fontSize: wp('2.5%'),
    textAlign: 'center',
    color: isDarkMode ? '#fff' : '#000',
  },
  swiperContainer: {
    height: hp('20%'),
    width: wp('100%'),
    marginBottom: hp('2%'),
  },
  swiper: {},
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  slideContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: wp('45%'),
  },
  slideText: {
    color: 'white',
    fontSize: wp('5%'),
    marginTop: wp('4%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    textAlign: 'center',
  },
  slideSubText: {
    color: 'white',
    fontSize: wp('3.5%'),
    marginBottom: hp('1.5%'),
    textAlign: 'left',
  },
  slideButton: {
    borderRadius: wp('5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    marginTop: hp('1%'),
  },
  slideButtonText: {
    color: '#12ccb7',
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
  },
  slideImage: {
    flex: 1,
    width: wp('190%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    resizeMode: 'stretch',
    borderRadius: wp('5%'),
  },
  upcomingCard: {
    width: '100%',
    height: '20%',
    alignItems: 'flex-start',
    marginTop: 0,
    padding: wp('4%'),
    backgroundColor: isDarkMode ? '#333' : '#fff',
    borderRadius: wp('2%'),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: hp('0.5%') },
    shadowOpacity: 0.1,
    shadowRadius: wp('1%'),
  },
  upcomingText: {
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
    color: isDarkMode ? '#fff' : '#000',
  },
  hr: {
    borderBottomColor: isDarkMode ? '#666' : 'red',
    borderBottomWidth: 1,
    marginVertical: 1,
  },
  upcomingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upcomingImage: {
    width: wp('20%'),
    height: wp('26%'),
    marginRight: wp('2%'),
    borderRadius: wp('2%'),
  },
  upcomingServiceText: {
    fontSize: wp('3.5%'),
    color: isDarkMode ? '#fff' : '#000',
    fontWeight: 'bold',
  },
  bookNowText: {
    color: '#00cc99',
    fontSize: wp('3%'),
  },
});

export default HomeScreen;
