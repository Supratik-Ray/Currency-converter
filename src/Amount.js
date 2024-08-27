export default function Amount({ amount, onSetAmount }) {
  return (
    <>
      <label htmlFor="">Amount:</label>
      <input
        type="text"
        className="amount"
        value={amount}
        onChange={(e) => {
          const value = Number(e.target.value);
          console.log(value);
          if (value < 999999999) onSetAmount(value);
        }}
      />
    </>
  );
}
