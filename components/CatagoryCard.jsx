import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

function CatagoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CatagoryCard;
