import React from 'react';

export default function Customizer({ color, setColor, message, setMessage }) {
  return (
    <div className="customizer">
      <label>
        Color de la Playera:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <label>
        Mensaje:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
    </div>
  );
}
