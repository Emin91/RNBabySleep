import { StyleSheet } from 'react-native'
import { colors } from '../../constants/ColorConstans'

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
    },
    titleView: {
        flex: 0.5,
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        width: 100,
        height: 100,
    },
    regView: {
        flex: 0.5,
        padding: 15,
        //backgroundColor: colors.PELOROUS
    },
    regContainer: {
        flex: 1,
        borderRadius: 20,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    userNameView: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        marginBottom: 10,
    },
    iconView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameRows: {
        flex: 0.8,
    },
    userNameBox: {
        flex: 1,
        justifyContent: 'center',
    },
    inputView: {
        flex: 1,
        justifyContent: 'center',

    },
    userNameText: {
        fontSize: 15,
        color: colors.GREY_OPACITY,
    }
})

export default styles