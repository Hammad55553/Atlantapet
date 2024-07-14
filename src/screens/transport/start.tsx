// App.tsx
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title={"Current Location"}
                    description={"This is where you are"}
                >
                    <View style={styles.markerWrap}>
                        <View style={styles.marker} />
                    </View>
                </Marker>
            </MapView>
            <View style={styles.userImageWrapper}>
                <Image
                    source={{ uri: 'https://placekitten.com/200/200' }}
                    style={styles.userImage}
                />
            </View>
            <View style={styles.detailsWrapper}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>PICKUP</Text>
                    <Text style={styles.detailText}>My current location</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>DROP-OFF</Text>
                    <Text style={styles.detailText}>Islamabad high way, Pakistan</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    userImageWrapper: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    detailsWrapper: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 20,
    },
    detailItem: {
        marginBottom: 10,
    },
    detailTitle: {
        fontSize: 12,
        color: 'gray',
    },
    detailText: {
        fontSize: 16,
        color: 'black',
    },
    markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'yellow',
    },
});

export default App;
