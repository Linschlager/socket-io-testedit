import React, { useEffect, useState, useMemo }  from 'react';
import io from 'socket.io-client';

const App = ({ url }) => {
  const socket = useMemo(() => io(url), [url]);
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
