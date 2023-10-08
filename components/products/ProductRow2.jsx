import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'

const ProductsRow = () => {
  const products = [1,2,3,4]
  return (
    <View style={{marginTop:SIZES.small}}>
      <FlatList
          data={products}
          renderItem={({item}) => <ProductCardView/>}
          horizontal 
          contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  )
}

export default ProductsRow