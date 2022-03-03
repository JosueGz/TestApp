import React, {useEffect, useContext,useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet,TouchableOpacity } from 'react-native';
import cryptoDB from '../api/cryptoDB';
import { CryptoDB } from '../interfaces/cryptoInterface';
import { useCryptos } from '../hooks/useCryptos';
import { CryptoList } from '../components/CryptoList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListContext } from '../context/ListContext';
import { ListStackParams } from '../navigation/CryptosNavigation';

interface Props extends StackScreenProps<ListStackParams, 'ListScreen'>{};

export const ListScreen = ({navigation}: Props) => {

	const [name, setName] =useState([]);

	const getData = async () => {
		try {
		  const value = await AsyncStorage.getItem('user')
		  if(value !== null) {
			console.log(value);
			setName(value)
			return value
		  }
		} catch(e) {
		  console.log('no pasa');
		}
		
	  }
	  console.log(name);
	useEffect(() => {
		getData();
	}, [])


	

	const onLogin = () => {
		// Keyboard.dismiss();
		  navigation.replace('LoginScreen');
	}


	
	const { cryptosEnLista, isLoading } = useCryptos();
	const { top } = useSafeAreaInsets();

	if (isLoading) {
		
		return (
			<View style={{flex: 1, justifyContent: 'center',aligContent:'center'}}>
				<ActivityIndicator color="red" size={100}	/>
			</View>
		)
		
	}
	const { list } = useContext(ListContext);

	return(
		
		<>
		
		<Text style = {loginStyles.titlel}>Bienvenido: {name}</Text>
		<View style={{ flex:1, marginHorizontal:10, marginTop:15}}>
			<FlatList 
				data={list}
				keyExtractor={(l) => l.id}

				renderItem={({item}) => (
					<TouchableOpacity
						activeOpacity={0.1}
						onPress={ 
							() => navigation.navigate('InfoScreen',{
							id:item.id,
							name: item.name
							})
						}
					>
						<Text style={ styles.productName }>{item.name}</Text>
					</TouchableOpacity>
					
				)}
			
				ItemSeparatorComponent={ () => (
					<View style={ styles.itemSeparator }/>
				)}
			/>

		</View>

		<View style={ loginStyles.formContainerl}>
		
			<View style={loginStyles.buttoncl}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={ loginStyles.buttonl}
					onPress={onLogin}
				>
					<Text style={loginStyles.buttontextl}>
						Logout
					</Text>

				</TouchableOpacity>
			</View>
		</View>

		</>

	)
}

const styles = StyleSheet.create({
	productName: {
		fontSize: 20,
	},
	itemSeparator:{
		borderBottomWidth: 2,
		marginVertical:5,
		borderBottomColor: 'rgba(0,0,0,0.1)'
	}

});