import React from "react";
import { ScrollView, Text, View } from "react-native";
import CatagoryCard from "./CatagoryCard";

function Catagories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Catagory Card */}
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg&ga=GA1.1.1248079255.1678479042&semt=popular"
        title="Testing"
      />
    </ScrollView>
  );
}

export default Catagories;
