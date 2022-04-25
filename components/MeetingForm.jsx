import { useState } from 'react';
import { useRouter } from 'next/router';

import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaKeyboard } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid';

function MeetingForm() {
  const router = useRouter();
  const [room, setRoom] = useState('');

  return (
    <div className='flex items-center justify-between space-x-4'>
      <button
        className='flex items-center justify-center gap-1 bg-blue-400 opacity-80 hover:opacity-100 p-2 rounded-md'
        onClick={() => router.push(`/room/${uuidv4()}`)}
      >
        <AiOutlineVideoCameraAdd />
        Nueva Meet
      </button>

      <form className='flex flex-1 items-center justify-between space-x-4'>
        <label className='flex items-center justify-between border border-gray-300 rounded-md p-2 focus:border-4 focus:border-blue-400'>
          <FaKeyboard className='' />
          <input
            className='ml-2 outline-none w-full'
            type='text'
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder='Nombre de la videoconferencia'
          />
        </label>
        <button
          className='text-gray-600 disabled:cursor-not-allowed hover:text-blue-400'
          disabled={!room}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default MeetingForm;
