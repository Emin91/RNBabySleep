import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { colors } from '../../constants/colorConstans'
import { settingListArray, settingListArrayTwo, settingListArrayThree, settingListArrayFour, headers } from '../../constants/settingListArray'
import styles from './style'
import Icon from '../../components/Icons'


const Item = ({
    color,
    itemName,
    itemSubtitle,
    onClick,
    switchOn,
}) => (
        <TouchableOpacity
            onPress={onClick}
            activeOpacity={0.6}>
            <View style={styles.itemViewRows}>
                <View style={styles.titleView}>
                    <Text style={[styles.title, { color }]}>{itemName}</Text>
                    <Text style={styles.titleSub}>{itemSubtitle}</Text>
                </View>
                <View style={styles.iconView}>
                    <Icon.Entypo
                        color={colors.WHITE}
                        name="chevron-small-right"
                        size={35}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )

const TabSettings = ({ navigation }) => {
    const [isTurnedOn, setIsTurnedOn] = useState(false);

    return (
        <View style={styles.mainView}>
            <ScrollView>
                <Item
                    switchOn={setIsTurnedOn}
                    onClick={() => navigation.navigate('$Tab2')}
                    itemName="Вам понравилось?"
                    itemSubtitle="Оцените в Play Store"
                    color={colors.GREEN}
                />
                <Item
                    onClick={() => navigation.navigate('$Tab1')}
                    itemName="Вам понравилось?"
                    itemSubtitle="Оцените в Play Store"
                    color={colors.GREEN}
                />
                <View style={styles.headerView}>
                    <Text style={styles.headers}>{headers.UPGRADES}</Text>
                </View>
                {
                    settingListArrayTwo.slice().map(({ itemName, itemSubtitle, }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <View style={styles.itemViewRows}>
                                    <View style={styles.titleView}>
                                        <Text style={styles.title}>{itemName}</Text>
                                        <Text style={styles.titleSub}>{itemSubtitle}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Icon.Entypo
                                            color={colors.WHITE}
                                            name="chevron-small-right"
                                            size={35}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={styles.headerView}>
                    <Text style={styles.headers}>{headers.SETTING}</Text>
                </View>
                {
                    settingListArrayThree.slice().map(({ itemName, itemSubtitle, }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <View style={styles.itemViewRows}>
                                    <View style={styles.titleView}>
                                        <Text style={styles.title}>{itemName}</Text>
                                        <Text style={styles.titleSub}>{itemSubtitle}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Icon.Entypo
                                            color={colors.WHITE}
                                            name="chevron-small-right"
                                            size={35}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={styles.headerView}>
                    <Text style={styles.headers}>{headers.ABOUT}</Text>
                </View>
                {
                    settingListArrayFour.slice().map(({ itemName, itemSubtitle, }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.6}
                            >
                                <View style={styles.itemViewRows}>
                                    <View style={styles.titleView}>
                                        <Text style={styles.title}>{itemName}</Text>
                                        <Text style={styles.titleSub}>{itemSubtitle}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Icon.Entypo
                                            color={colors.WHITE}
                                            name="chevron-small-right"
                                            size={35}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style={[styles.headerView, { justifyContent: 'center', alignItems: 'center', }]}>
                    <Text style={styles.version}>{headers.DEVELOP}</Text>
                    <Text style={styles.version}>{headers.VERSION}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default TabSettings
