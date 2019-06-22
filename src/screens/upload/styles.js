import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5E34C2',
        paddingTop: 10,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    textInputView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '88%',
        borderTopRightRadius: 20,
        minHeight: 65,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#ddd',
        justifyContent: 'space-between'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    buttons2: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 10
    }

})