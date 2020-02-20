import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../../styles/TextElementsStyle'

const TextElements = (props) => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    )
}

export default TextElements;
