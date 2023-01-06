import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CatagoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgUrl,
        }}
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
