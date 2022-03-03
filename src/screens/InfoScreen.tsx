import React, { useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ListStackParams } from '../navigation/CryptosNavigation';
import { LineChart, Grid } from 'react-native-svg-charts';



interface Props extends StackScreenProps<ListStackParams, 'InfoScreen'>{};

export const InfoScreen = ({ navigation,route }: Props) => {
	const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
	const { id, name } = route.params;

	useEffect(() => {
		navigation.setOptions({
			title: (name) 
		});
	}, [])
	
	return(
		<View style={styles.container}>
			<ScrollView>
				<Text style={ styles.label }>Nombre de Crypto:</Text>
				<Text style={ styles.text }>{name}</Text>
					<LineChart
					style={{ height: 200 }}
					data={data}
					svg={{ stroke: 'rgb(134, 65, 244)' }}
					contentInset={{ top: 20, bottom: 20 }}
					>
						<Grid />
					</LineChart>
			</ScrollView>
			
		</View>
		

	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:10,
		marginHorizontal:20
	},
	label:{
		fontSize: 18
	},
	text:{
		marginTop:5,
		fontSize: 15
	}
});