import React from 'react'
import { View, Text } from 'react-native';
import { Datum } from '../interfaces/cryptoInterface';


interface Props{
    datum: Datum; 
}

export const CryptoList = ({datum}:Props) => {
    console.log(datum);
  return (
    <View>
        <Text>
            ListaCrypto
        </Text>
    </View>
  )
}
