import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar, TextInput, Button, Keyboard, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <SafeAreaView style={styles.container} >
        <View style={styles.above}>
          <TextInput style={styles.inputText} placeholder="Course Goal" onChangeText={goalInputHandler} ></TextInput>
          <Button title="ADD" onPress={addGoalHandler} ></Button>
        </View>
        <ScrollView>
          <View onStartShouldSetResponder={() => true} >
            {courseGoals.map((goal) => 
              <View key={goal + Math.random()} style={styles.listItem}>
                <Text> {goal} </Text> 
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputText: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '80%'
  },
  above: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  }
});
