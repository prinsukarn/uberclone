import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RideOptions = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw` rounded-full py-5`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        <Text style={tw`text-center py-5 text-xl font-medium  w-5/6`}>
          Select A Ride
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;
