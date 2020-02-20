import { StyleSheet } from 'react-native'
import * as COLOR from '../constants/ColorConstans';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: COLOR.colors.GREY,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        color: COLOR.colors.CERULEAN,
        marginVertical: 5,
    },
    itemViews: {
        // backgroundColor: 'red',
        marginBottom: 20,
    },
    textsView: {
        borderBottomWidth: 0.2,
        borderBottomColor: COLOR.colors.GREY_OPACITY,
        height: 60,
        justifyContent: 'center',
    },
    texts: {
        fontSize: 20,
        color: COLOR.colors.WHITE,
    },
})

export default styles