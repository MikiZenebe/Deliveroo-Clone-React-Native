import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, desc }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-sm text-gray-500 px-4">{desc}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((item) => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type.name}
            address={item.address}
            short_desc={item.short_desc}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
