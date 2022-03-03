import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import cryptoDB from '../api/cryptoDB';
import { CryptoDB } from '../interfaces/cryptoInterface';
import { useCryptos } from '../hooks/useCryptos';
import { CryptoList } from '../components/CryptoList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ListScreen = () => {

	const { cryptosEnLista, isLoading } = useCryptos();
	const { top } = useSafeAreaInsets();

	if (isLoading) {
		return (
			<View style={{flex: 1, justifyContent: 'center',aligContent:'center'}}>
				<ActivityIndicator color="red" size={100}	/>
			</View>
		)
		
	}
	return(
		<View style={{ marginTop: top + 1}}>
			<CryptoList
				datum={ cryptosEnLista[0] }
			/>
		</View>

	)
}