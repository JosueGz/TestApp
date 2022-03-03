import React, {useEffect, useState} from 'react';
import { View, Text, Button, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import cryptoDB from '../api/cryptoDB';
import { CryptoDB } from '../interfaces/cryptoInterface';
import { useCryptos } from '../hooks/useCryptos';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


export const LoginScreen = () => {

	const navigation = useNavigation();
	const [textInputName, setTextInputName] = useState('');
	const checkTextInput = () => {
		
		if (!textInputName.trim()) {
		  alert('Porfavor ingrese un usuario');
		  return;
		}
		
		navigation.navigate('ListScreen');
	  };
	return(
		<>
		<Background />
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
				onChangeText={
					(value) => setTextInputName(value)
				  }
			/>
			<View style={loginStyles.buttonc}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={ loginStyles.button}
					onPress={checkTextInput}
				>
					<Text style={loginStyles.buttontext}>
						Login
					</Text>

				</TouchableOpacity>
			</View>
		</View>
		</>
	)
}