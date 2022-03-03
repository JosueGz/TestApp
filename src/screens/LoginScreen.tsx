import React, {useEffect, useState} from 'react';
import { View, Text, Button, ActivityIndicator, Platform, KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import cryptoDB from '../api/cryptoDB';
import { CryptoDB } from '../interfaces/cryptoInterface';
import { useCryptos } from '../hooks/useCryptos';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props extends StackScreenProps<any , any>{

}
const storeData = async (value) =>{
	try {
		await AsyncStorage.setItem('user',value)
	  } catch(e) {
		console.log('mal.')
	  }
	  console.log('Done.')
	
}

export const LoginScreen = ({navigation}: Props) => {
	

	const {user, onChange} = useForm({
		user: '',
	});
	
	

	const onLogin = () => {
		storeData(user);
		Keyboard.dismiss();
		// console.log(user);
		if (!user.trim()) {
			alert('Porfavor ingrese un usuario');
			return;
		  }
		  
		  
		  navigation.replace('Crypto');
		  
	}

	

	

	return(
		<>
		<Background />
		<KeyboardAvoidingView
			style={{ flex:1 }}
			behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
		>
		<View style={ loginStyles.formContainer}>
			<Text style = {loginStyles.title}>Usuario </Text>
			<TextInput 
				placeholder = "Ingrese su usuario"
				placeholderTextColor="rgba(0,0,0,0.7)"
				keyboardType="email-address"
				underlineColorA
				style = { [
					loginStyles.inputField,
					(Platform.OS === 'ios') && loginStyles.inputFieldIOS
				] }
				selectionColor="white"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(value) => onChange(value,'user')}
				value={ user }
				onSubmitEditing={onLogin}
			/>
			<View style={loginStyles.buttonc}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={ loginStyles.button}
					onPress={onLogin}
				>
					<Text style={loginStyles.buttontext}>
						Login
					</Text>

				</TouchableOpacity>
			</View>
		</View>
		</KeyboardAvoidingView>
		</>
	)
}