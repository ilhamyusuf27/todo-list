/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { useState } from 'react';

import {
  DndContext,
  MeasuringStrategy,
  closestCorners,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

import DragableColumn from '../DragableColumn';

interface Tasks {
  id: string | number;
  name: string;
  emoji: string;
}

interface Props {
  title: string;
  // shortcut: string;
}

const ListWorkspace = (props: Props) => {
  const { title } = props;
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: 1, emoji: "📖", name: 'Complete React project' },
    { id: 2, emoji: "🫤", name: 'Review pull requests' },
    { id: 3, emoji: "🥼", name: 'Write unit tests' },
  ]);

  const getTaskPos = (id: number) => tasks.findIndex((task: Tasks) => task.id === id);

  const handleAddTask = () => setTasks((prev) => [...prev, { id: tasks.length + 1, emoji: "🗋", name: "Untitled" }]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setTasks(() => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div>
      <span className="font-semibold">{title}</span>
      <div className="mt-2">
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
          // Add this to disable animations
          measuring={{
            droppable: {
              strategy: MeasuringStrategy.Always,
            },
          }}
        >
          <SortableContext
            items={tasks}
            strategy={verticalListSortingStrategy}
          // Add these props
          // animateLayoutChanges={() => false}
          >
            {tasks.map((task: Tasks) => (
              <DragableColumn
                key={task.id}
                {...task}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 hover:rounded-sm px-2 py-2" onClick={handleAddTask}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-3"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>

        <div className="text-sm">Create new task</div>
      </div>
    </div>
  );
};

export default ListWorkspace;
