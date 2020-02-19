import { StyleSheet } from 'react-native'
import * as COLOR from '../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.GREY_OPACITY,
    },
    imgView: {
        flex: 0.4,
        backgroundColor: 'green',
    },
    img: {
        width: '60%',
        height: '40%',
    },
    text: {
        fontSize: 50,
        color: COLOR.WHITE,
    }
})

export default styles
