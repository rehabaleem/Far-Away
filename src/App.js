import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  //adding item
  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //deletaing item
  function handeleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //updating item
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //delete items
  function handelDeleteList() {
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete All Items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handelAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handeleDeleteItem}
          onToggleItem={handleToggleItem}
          onDeleteList={handelDeleteList}
        />
        <Status items={items} />
      </div>
    </>
  );
}
export default App;
