import { StyleSheet } from 'react-native'
import { colors } from '../../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GREY,
    },
    logo: {
        width: '60%',
        height: '40%',
    },
    text: {
        fontSize: 50,
        color: colors.WHITE,
    }
})

export default styles
