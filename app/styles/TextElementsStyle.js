import { StyleSheet } from 'react-native'
import * as COLOR from '../constants/ColorConstans';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: COLOR.GREY,
        paddingTop: 20,
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
        color: COLOR.PELOROUS,
        marginVertical: 5,

    },
    textsView: {
        borderBottomWidth: 0.2,
        borderBottomColor: COLOR.GREY_OPACITY,
        height: 60,
        justifyContent: 'center',
    },
    texts: {
        fontSize: 20,
        color: COLOR.WHITE,
    },
})

export default styles