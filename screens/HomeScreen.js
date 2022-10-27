import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, SafeAreaView, Image, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const naviga = useNavigation();

  useLayoutEffect(() => {
    naviga.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-indigo-200 h-screen  ">
      {/*//! Header */}
      <View className="p-5 shadow-xl">
        <Image
          className="h-64 rounded-xl "
          source={{
            uri: "https://images.unsplash.com/photo-1666834531292-b2a746be5e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }}
        />
      </View>
      <Text className="text-7xl font-bold text-blue-700 text-center">
        Selamun Aleykum
      </Text>
      <Button
        className=" bg-blue-700 "
        title="ff"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </SafeAreaView>
  );
}
