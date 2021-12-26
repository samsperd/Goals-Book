import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

const GoalInput = ({addGoalHandler, modalState, closeModal}) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={modalState} animationType='slide' >
            <View style={styles.above}>
             <TextInput
                style={styles.inputText}
                placeholder="Course Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
                ></TextInput>
                <View style={styles.inAbove}>
                    <View style={styles.button}>
                        <Button onPress={closeModal} title='Cancel' color='red'></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD"
                            onPress={() => {
                                addGoalHandler(enteredGoal);
                                setEnteredGoal('');
                            }} 
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputText: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '80%',
        marginBottom: 10
      },
      above: {
        // flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inAbove: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%'
      },
      button: {
          width: '40%'
      }
})

export default GoalInput;
