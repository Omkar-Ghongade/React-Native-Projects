import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

interface Note {
  key: string;
  text: string;
}

export default function Index() {
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, { key: notes.length.toString(), text: note }]);
      setNote('');
    }
  };

  const deleteNote = (key: string) => {
    setNotes(notes.filter(note => note.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your note here"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.note}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.key)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
  },
  note: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});