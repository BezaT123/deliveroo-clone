import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon size={20} color="#00BBCC"/>
        </View>
       <Text className="text-sm text-gray-500 px-4">{description}</Text>
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
       >
        <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
        <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
        <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
        <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
                <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
                <RestaurantCard
          id= "12"
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese" 
          address="123 Main St"
          short_description="Logs for your project will appear below."
          dishes={[]}
          long={20} 
          lat={0}
        />
       </ScrollView>
        
      
    </View>
  )
}

export default FeaturedRow