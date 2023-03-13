import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CatagoryCard from "./CatagoryCard";
import sanity from "../sanity";

function Catagories() {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    sanity.fetch(`  *[_type == "category"]`).then((data) => {
      setCatagories(data);
    });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Catagory Card */}
      {catagories.map((item) => (
        <CatagoryCard key={item._id} imgUrl={item.image} title={item.name} />
      ))}
    </ScrollView>
  );
}

export default Catagories;
