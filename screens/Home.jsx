import { View, Text ,ScrollView,TouchableOpacity} from "react-native";
import { Badge } from "react-native-elements";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Welcome } from "../components";
import Headings from "../components/home/Headings";
import Carousel from "../components/home/Carousel";
import ProductsRow from "../components/products/ProductRow";

import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text>TP. Ho Chi Minh, Viet Nam</Text>

          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
            <Badge status="success" value="3" containerStyle={{ position: "absolute", top: -8, right: -8 }} />
          </View>
        </View>
      </View>
      <ScrollView style={{flex:1}}>
        <Welcome />
        <Carousel />
        {/* <Categories /> */}
        <Headings />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
