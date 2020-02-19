import { StyleSheet } from 'react-native';
import * as COLOR from '../constants/ColorConstans'; //Color constants

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.GREY_OPACITY,
    },
    textInputView: {
        flex: 0.2,
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    textInput: {
        fontSize: 20,
        textAlign: 'center',
        color: COLOR.CERULEAN,
        borderBottomWidth: 2,
        borderBottomColor: COLOR.CERULEAN,
    },
    recorderView: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
    },
    timer: {
        fontSize: 40,
        paddingBottom: 20,
        color: COLOR.WHITE,
    },
    recorderBtn: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: COLOR.LOCHMARA,
    },
    sliderView: {
        flex: 0.2,
        justifyContent: 'flex-start',
        //backgroundColor: 'green',
    }
})

export default styles