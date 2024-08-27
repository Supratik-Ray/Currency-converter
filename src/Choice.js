export default function Choice({ children, value, onSetValue }) {
  return (
    <>
      {children}
      <select
        className="choice"
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
      >
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
      </select>
    </>
  );
}
