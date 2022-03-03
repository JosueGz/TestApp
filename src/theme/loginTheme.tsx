import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 100
    },
    titlel: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        paddingHorizontal: 30,
        justifyContent: 'center',

    },
    inputField:{
        color: 'black',
        fontSize: 17,
    },
    inputFieldIOS:{
        color: 'black',
        fontSize: 17,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    buttonc:{
        alignItems: 'center',
        marginTop: 20
    },
    buttoncl:{
        alignItems: 'center',
        marginBottom: 0
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonl:{
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttontext:{
        fontSize: 15,
        color: 'white'
    },
    buttontextl:{
        fontSize: 15,
        color: 'black'
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    formContainerl: {
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 90,
        marginBottom: 0
    }



});