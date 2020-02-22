import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../constants/colorConstans'
import { settingListArray, settingListArrayTwo, settingListArrayThree, settingListArrayFour, headers } from '../../constants/settingListArray'
import styles from './style'
import Icon from '../../components/Icons'



const TabSettings = () => {

    return (
        <View style={styles.mainView}>
            <ScrollView>
                {
                    settingListArray.slice().map(({ itemName, itemSubtitle, color }) => {
                        return (
                            <TouchableOpacity
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
                    })
                }
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
