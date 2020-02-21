import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colorConstans'

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.GREY,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        color: colors.CERULEAN,
        marginVertical: 5,
    },
    itemViews: {
        // backgroundColor: 'red',
        marginBottom: 20,
    },
    textsView: {
        borderBottomWidth: 0.2,
        borderBottomColor: colors.GREY_OPACITY,
        height: 60,
        justifyContent: 'center',
    },
    texts: {
        fontSize: 20,
        color: colors.WHITE,
    },
})

export default styles