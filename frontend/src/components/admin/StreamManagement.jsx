// src/components/admin/StreamManagement.jsx
export default function StreamManagement({ status, onStart, onStop }) {
  return (
    <div>
      <h2>Stream Management</h2>
      <p>Status: {status}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}
