import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Catagories, FeaturedRow } from "../components";

function HomeScreen() {
  const navigation = useNavigation(); //to access the nav object

  //When the screen happen do something
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, //Don't show me the header
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex flex-row items-center space-x-2 px-4">
        <View>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/256/4860/4860866.png",
            }}
            className="w-10 h-10 bg-gray-300 rounded-full "
          />
        </View>

        <View className="py-4 flex-1">
          <Text className="text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold ">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center">
          <MagnifyingGlassIcon size={24} color="gray" />
          <TextInput
            className="text-base"
            placeholder="Resturant and cusines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon size={30} color="#00ccbb" />
      </View>

      {/* Scroll View Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catagory */}
        <Catagories />
        {/* Featuerd Row */}
        <FeaturedRow
          title="Featured"
          desc="Paid placemnt from our partners"
          id="1"
        />
        <FeaturedRow
          title="Tasty Discounts"
          desc="Everyone's been enjoying these discounts"
          id="2"
        />
        <FeaturedRow
          title="Offers near you!"
          desc="Why not support your local restaurant tonight!"
          id="3"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
