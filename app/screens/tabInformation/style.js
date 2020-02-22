import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.GREY,
    },
    headerImgView: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerImg: {
        width: '100%',
        height: '100%',
    },
    mainTitleView: {
        flex: 0.1,
        justifyContent: 'center',
        padding: 5,
    },
    mainTitle: {
        fontSize: 18,
        paddingLeft: 10,
        color: colors.PELOROUS,
    },
    itemView: {
        flex: 0.5,
    },
    dropMenuView: {
        position: 'absolute',
        width: '80%',
        height: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    touchableBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropMenuText: {
        fontSize: 10,
        color: colors.BLACK
    },
})

export default styles
