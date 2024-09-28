import React, { useState } from 'react';

const Toggle = () => {
  // 1. Boolean: Manejando el estado de un interruptor (toggle)
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
      {/* Boolean Example */}
      <h2>Boolean (Toggle Switch)</h2>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
};

export default Toggle;
