import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/TextElementsStyle'

const TextElements = (props) => {
    return (
        <View style={{ backgroundColor: '#124563' }}>
            <Text style={styles.title}>{props.title}</Text>
            {false ? <Text>Sound 1</Text> : null}
            {false ? <Text>Sound 1</Text> : null}
        </View>
    )
}

export const TextArray = ({ textTitle, onPress }) => {
    return (
        <View style={{ backgroundColor: '#124596' }}>
            <TouchableOpacity onPress={() => onPress()} >
                <Text style={styles.title}>{textTitle}</Text>
            </TouchableOpacity>
        </View >
    )
}


export default TextElements
