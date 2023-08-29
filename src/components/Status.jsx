function Status({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚉</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈"
            : `You have ${numItems} items On Your List , and you already Packed
          ${numPacked} (${numPacked === 0 ? 0 : percentage}%)`}
        </em>
      </footer>
    </>
  );
}
export default Status;
