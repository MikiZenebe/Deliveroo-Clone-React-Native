import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CatagoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        className="h-20 w-20 rounded"
        source={{
          uri: imgUrl,
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
