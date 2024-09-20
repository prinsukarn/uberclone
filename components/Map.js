import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // Check if origin is available; if not, request live location
  //     if (!origin?.location) {
  //       (async () => {
  //         // Request permission for location
  //         let { status } = await Location.requestForegroundPermissionsAsync();
  //         if (status !== "granted") {
  //           setErrorMsg("Permission to access location was denied");
  //           setLoading(false); // Stop loading even if permission is denied
  //           return;
  //         }

  //         // Fetch the user's current position
  //         let location = await Location.getCurrentPositionAsync({});
  //         setCurrentLocation({
  //           latitude: location.coords.latitude,
  //           longitude: location.coords.longitude,
  //           latitudeDelta: 0.005,
  //           longitudeDelta: 0.005,
  //         });
  //         setLoading(false); // Stop loading after getting location
  //       })();
  //     } else {
  //       setLoading(false); // No need to load if origin exists
  //     }
  //   }, [origin]);

  //   // Determine region based on whether origin is available or fallback to live location
  //   const region = origin?.location
  //     ? {
  //         latitude: origin.location.lat,
  //         longitude: origin.location.lng,
  //         latitudeDelta: 0.005,
  //         longitudeDelta: 0.005,
  //       }
  //     : currentLocation;

  //   if (
  //     !origin?.location &&
  //     dispatch(
  //       setOrigin({
  //         location: details.geometry.location,
  //         description: data.description,
  //       })
  //     )
  //   )
  //     if (loading) {
  //       // Show loading spinner until the map region is available or location access is denied
  //       return (
  //         <View style={[tw`flex-1 justify-center items-center`]}>
  //           <ActivityIndicator size="large" color="#0000ff" />
  //           <Text>Loading map...</Text>
  //         </View>
  //       );
  //     }

  //   if (errorMsg) {
  //     return <Text>{errorMsg}</Text>;
  //   }
  //   Resolve the issue with seting live location as origin later

  const region = origin
    ? {
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={region} // Use either the origin or the live location as the map region
    >
      {region && (
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={origin?.location ? "Origin" : "Your Location"}
          description={origin?.description || "You are here"}
          identifier="location"
        />
      )}
    </MapView>
  );
};

export default Map;
