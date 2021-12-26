import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = ({ goal, deleteGoal }) => {
    return (
        <TouchableOpacity onPress={() => deleteGoal(goal.item.uid)} style={styles.listItem}>
            <Text>{ goal.item.value }</Text>
        </TouchableOpacity>
    //     <View onStartShouldSetResponder={() => true}>
    //   </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})

export default GoalItem;
