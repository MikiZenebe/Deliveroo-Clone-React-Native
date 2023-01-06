import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCards
          id={1325}
          imgUrl="https://img.freepik.com/free-psd/voucher-template-with-american-food_23-2148478915.jpg?size=626&ext=jpg"
          title="Burger"
          rating={4.8}
          genre="USA"
          address="California"
          short_description="You can feel it"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={1325}
          imgUrl="https://img.freepik.com/free-psd/voucher-template-with-american-food_23-2148478915.jpg?size=626&ext=jpg"
          title="Burger"
          rating={4.8}
          genre="USA"
          address="California"
          short_description="You can feel it"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={1325}
          imgUrl="https://img.freepik.com/free-psd/voucher-template-with-american-food_23-2148478915.jpg?size=626&ext=jpg"
          title="Burger"
          rating={4.8}
          genre="USA"
          address="California"
          short_description="You can feel it"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={1325}
          imgUrl="https://img.freepik.com/free-psd/voucher-template-with-american-food_23-2148478915.jpg?size=626&ext=jpg"
          title="Burger"
          rating={4.8}
          genre="USA"
          address="California"
          short_description="You can feel it"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={1325}
          imgUrl="https://img.freepik.com/free-psd/voucher-template-with-american-food_23-2148478915.jpg?size=626&ext=jpg"
          title="Burger"
          rating={4.8}
          genre="USA"
          address="California"
          short_description="You can feel it"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
