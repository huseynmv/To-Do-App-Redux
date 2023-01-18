import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ToDo = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.header.text}>To Do App</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title.text}>Add New To Do</Text>
        <TextInput style={styles.input} placeholder="New To Do" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button.text}>Add</Text>
        </TouchableOpacity>
          </View>
          
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ECF0F1',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    text: {
      fontSize: 30,
      fontWeight: '700',
    },
  },
  title: {
    text: {
      fontSize: 22,
      fontWeight: '400',
    },
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 40,
    margin: 20,
    borderRadius: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200EE',
    marginTop: 10,
    width: '100%',
    padding: 10,
    text: {
      color: 'white',
    },
  },
});
