import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsIcon, ChevronDownIcon, SearchCircleIcon, SearchIcon, UserIcon} from "react-native-heroicons/outline";
import Catagories from '../components/Catagories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false,
    })
  },[]);

  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-sm text-gray-400">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="#00BBCC"/>
                </Text>

            </View>
            <UserIcon size={35} color="#00BBCC"/>

        </View>
        {/* Search */}
        <View className="flex-row space-x-2 pb-2 mx-4">
            <View className="flex-row bg-gray-300 space-x-2 p-3 flex-1">
                <SearchIcon />
                <TextInput placeholder='Search Restaurants'/>
            </View>
            <AdjustmentsIcon color="#00BBCC"/>
        </View>

        {/* Body */}
        <ScrollView className="bg-gray-200 flex-1">
            {/* Catagories */}
            <Catagories />
            {/* FeaturedRow */}
            <FeaturedRow
                id ="1"
                title="Featured"
                description="Paid placment from our sponsors"
            />
            <FeaturedRow
                id ="2"
                title="Tasty Discounts"
                description="Paid placment from our sponsors"
            />
            <FeaturedRow
                id ="2"
                title="Offer near you!"
                description="Paid placment from our sponsors"
            />
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default HomeScreen