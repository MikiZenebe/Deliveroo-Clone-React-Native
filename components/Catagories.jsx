import { ScrollView } from "react-native";
import { CatagoryCard } from "../components/index";

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
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 1"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 2"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 3"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 3"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 3"
      />
      <CatagoryCard
        imgUrl="https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?size=626&ext=jpg"
        title="Test 3"
      />
    </ScrollView>
  );
};

export default Catagories;
