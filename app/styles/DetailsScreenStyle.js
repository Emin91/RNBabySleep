import { StyleSheet } from 'react-native'
import * as COLOR from '../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: COLOR.colors.GREY_OPACITY,
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(67,124,254,0.5)',
        position: 'absolute',
    },
    titleText: {
        fontSize: 30,
        color: COLOR.colors.WHITE,
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
        //backgroundColor: 'orange',
    },
    text: {
        fontSize: 14,
        paddingLeft: 10,
        color: COLOR.colors.WHITE,
    }
})

export default styles
