import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.GREY
    },
    titleView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GREY
    },
    mainTitle: {
        fontSize: 30,
        color: colors.WHITE
    },
    regView: {
        flex: 0.6,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.PELOROUS
    },
})

export default styles