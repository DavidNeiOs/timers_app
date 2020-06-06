import React from 'react';
import { View, Text } from 'react-native';
import { TimerForm } from './TimerForm';
import { Timer } from './Timer';

interface EditableTimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  editFormOpen?: boolean;
}

export const EditableTimer: React.FC<EditableTimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
  editFormOpen = false,
}) => {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
};
