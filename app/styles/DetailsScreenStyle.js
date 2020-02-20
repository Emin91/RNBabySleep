import { StyleSheet } from 'react-native'
import { colors } from '../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.GREY_OPACITY,
    },
    imgView: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    titleTextView: {
        flex: 0.1,
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(67,124,254,0.5)',
        position: 'absolute',
    },
    titleText: {
        fontSize: 30,
        color: colors.WHITE,
        //position: 'absolute',
    },
    slidersView: {
        flex: 0.4,
        paddingHorizontal: 20,
        paddingVertical: 10,
        // backgroundColor: 'green',
    },
    soundButtonsView: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btnRows: {
        flex: 1,
        backgroundColor: colors.LOCHMARA,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 8,
        marginLeft: 5,
        marginRight: 5,
    },
    btnsText: {
        fontSize: 20,
        color: colors.WHITE,
    },
    text: {
        fontSize: 18,
        paddingLeft: 10,
        color: colors.WHITE,
    }
})

export default styles
