import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onDeleteList }) {
  const [sortBy, setsortBy] = useState("input");
  let sortedItems;
  if (sortBy == "input") sortedItems = items;
  if (sortBy == "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy == "status")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="status">sort by packed status</option>
          </select>
          <button onClick={onDeleteList}>clear list</button>
        </div>
      </div>
    </>
  );
}
export default PackingList;
