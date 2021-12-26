import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar, Button, Keyboard, SafeAreaView, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    if(enteredGoal.length === 0) {
      return;
    }

    setCourseGoals(currentGoals => 
      [
        ...currentGoals,
        {
          uid: Math.random().toString(),
          value: enteredGoal
        }
      ]);
      
    Keyboard.dismiss();
    setModalState(false);
  }

  const removeGoalHandler = (goalUid) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid !== goalUid);
    })
  }

  const [modalState, setModalState] = useState(false);

  const closeModal = () => {
    setModalState(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <SafeAreaView style={styles.container} >
        <Button title='Add New Goal' onPress={() => setModalState(true)}></Button>
        <GoalInput addGoalHandler={ addGoalHandler } modalState={modalState} closeModal={closeModal}></GoalInput>

        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={goal => (
            <GoalItem goal={goal} deleteGoal={removeGoalHandler} />
          )}
        ></FlatList>
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

});
