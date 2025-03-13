// import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DragIcon from '../DragIcon';

interface Props {
  name: string;
  id: string | number;
  emoji: string;
}

const DragableColumn = (props: Props) => {
  const { name, id, emoji } = props;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
    transition: {
      duration: 0, // Set to 0 to remove the animation
      easing: 'ease',
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex items-center cursor-grab hover:bg-gray-100 hover:rounded-sm bg gap-1 px-2 py-2"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <DragIcon />
      <div className="w-4 h-4 inline-flex items-center justify-center">{emoji}</div>
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default DragableColumn;
