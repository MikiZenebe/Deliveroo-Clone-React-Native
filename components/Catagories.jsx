import { View, Text, ScrollView } from "react-native";
import React from "react";
import CatagoryCard from "./CatagoryCard";

const Catagories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Catagory Card */}
      <CatagoryCard imgUrl="https://links.papareact.com/wru" title="Test 1" />
      <CatagoryCard imgUrl="https://links.papareact.com/wru" title="Test 2" />
      <CatagoryCard imgUrl="https://links.papareact.com/wru" title="Test 3" />
    </ScrollView>
  );
};

export default Catagories;
