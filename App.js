import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import ImageList from './ImageList';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter image type"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <ImageList query={query} />
    </View>
  );
};

export default App;

