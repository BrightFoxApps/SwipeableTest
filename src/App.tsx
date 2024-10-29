import React, {useState} from 'react';
import {Text} from 'react-native';
import {GestureHandlerRootView, Pressable} from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

export default function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <GestureHandlerRootView>
      <Pressable onPress={() => setCount(prev => prev + 1)}>
        <Text>{count}</Text>
      </Pressable>

      <ReanimatedSwipeable>
        <Text>Test</Text>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}
