import {StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    view: {
      width: '100%',
      justifyContent: 'flex-end',
      height: '70%',
    },
    email: {
      flexDirection: 'row',
      width: '100%',
      height: 40,
      paddingLeft: 30,
      paddingRight: 50
    },
    inputEmail: {
      borderColor: 'gray',
      width: '100%',
      elevation: 1,
      borderRadius: 50,
      borderWidth: 0.5
    },
    inputEmailEmpty: {
      borderColor: 'red',
      width: '100%',
      elevation: 1,
      borderRadius: 50,
      borderWidth: 0.5
    },
    password: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 20,
      height: 40,
      paddingLeft: 30,
      paddingRight: 50
    },
    inputPassword: {
      borderColor: 'gray',
      width: '100%',
      elevation: 1,
      borderRadius: 50,
      borderWidth: 0.5
    },
    inputPasswordEmpty: {
      borderColor: 'red',
      width: '100%',
      elevation: 1,
      borderRadius: 50,
      borderWidth: 0.5
    },
    label: {
      width: '100%',
      paddingLeft: 30,
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: 30,
      marginBottom: 40
    },
    label2: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 30
    },
    entrar: {
      backgroundColor: "#5E34C2",
      height: 30,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    },
    registrar: {
      backgroundColor: "#5E34C2",
      height: 30,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    }
  })