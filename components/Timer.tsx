import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { millisecondsToHuman } from '../utils/TimerUtils';
import { TimerButton } from './TimerButton';

interface TimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
}

export const Timer: React.FC<TimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
}) => {
  const elapsedString = millisecondsToHuman(elapsed);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color='blue' small title='Edit' onPress={() => {}} />
        <TimerButton color='blue' small title='Remove' onPress={() => {}} />
      </View>
      <TimerButton color='#21BA45' title='Start' onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
