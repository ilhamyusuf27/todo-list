import React, { useState } from 'react';
import moment from 'moment';
import Input from '../Input';

interface Props {
  children: React.ReactNode;
}

const Workspaces = (props: Props) => {
  const [editTitle, setEditTitle] = useState<boolean>(false);
  return (
    <section>
      <div className="px-20 py-8">
        {editTitle ? (
          <Input />
        ) : (
          <h1
            className="text-2xl flex items-center cursor-pointer font-bold"
            onClick={() => setEditTitle((prev) => !prev)}
          >
            📖 Complete React project
          </h1>
        )}
        <div className='text-sm mt-2 text-secondary'>
          It's {moment().format("dddd, DD MMMM YYYY")}
        </div>

        {props.children}
      </div>
    </section>
  );
};

export default Workspaces;
