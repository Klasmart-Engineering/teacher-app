import React, { useState,useCallback } from 'react';
import { Text, SafeAreaView, TextInput, Button } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

function GroceryShoppingList() {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <SafeAreaView>
      <TextInput
        value={groceryItem}
        placeholder="Enter grocery - item"
        onChangeText={(text) => setGroceryItem(text)}
      />
      <Button
        title="Add the item to list"
        onPress={addNewItemToShoppingList}
      />
      {items.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </SafeAreaView>
  );
}

export default GroceryShoppingList;