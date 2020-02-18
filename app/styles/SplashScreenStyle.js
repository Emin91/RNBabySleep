import { StyleSheet } from 'react-native'
import * as COLOR from '../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.GREY,
    },
    logo: {
        width: '60%',
        height: '40%',
    },
    text: {
        fontSize: 50,
        color: COLOR.WHITE,
    }
})

export default styles
