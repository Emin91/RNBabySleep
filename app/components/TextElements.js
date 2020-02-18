import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/TextElementsStyle'

const TextElements = (props) => {
    return (
        <Text style={styles.title}>{props.title}</Text>
    )
}

export const TextArray = ({ textTitle, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} >
            <Text style={styles.title}>{textTitle}</Text>
        </TouchableOpacity>
    )
}


export default TextElements
