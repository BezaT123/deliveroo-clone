import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

const Catagories = () => {
  return (
    <ScrollView 
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}>

      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing1" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing2" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing3"/>
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing1" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing2" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing3"/>
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing1" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing2" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing3"/>
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing1" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing2" />
      <CatagoryCard imageUrl="https://links.papareact.com/wru" title="Testing3"/>

    </ScrollView>
  )
}

export default Catagories