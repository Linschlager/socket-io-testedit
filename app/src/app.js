import React, { useEffect, useState, useCallback }  from 'react';
import io from 'socket.io-client';

const App = () => {
  const socket = useCallback(io('http://localhost:3000'), []);
  const [text, setText] = useState('');
  useEffect(() => {
    socket.on("data", setText);
  }, []);

  const onChange = (e) => {
    socket.emit('data', e.target.value);
    setText(e.target.value);
  };

  return (
   <div>
     <textarea value={text} onChange={onChange} />
   </div>
  );
};

export default App;
