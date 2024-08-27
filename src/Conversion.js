export default function Conversion({ output, to }) {
  return (
    <>
      <p className="tag">conversion:</p>
      <p className="output">
        {output} {to}
      </p>
    </>
  );
}
